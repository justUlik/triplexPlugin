import { execFile } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';

const host = '127.0.0.1';
const port = 43127;
const token = randomBytes(24).toString('hex');
let running = false;

function reply(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(body));
}

function readCliAnswer(stdout) {
  const text = stdout.trim().replace(/^```(?:json)?\s*([\s\S]*?)\s*```$/i, '$1');
  const output = JSON.parse(text);
  if (Array.isArray(output)) {
    if (output.length && output.every(item => Number.isInteger(item?.id) && typeof item.text === 'string')) {
      return JSON.stringify({ items: output });
    }
    const result = [...output].reverse().find(event =>
      event?.type === 'result' && (event.result != null || event.response != null || event.is_error || event.error));
    if (result) return readCliAnswer(JSON.stringify(result));
    const messages = output.filter(event =>
      event?.role === 'assistant' || event?.type === 'assistant' || event?.message?.role === 'assistant');
    const deltas = messages.filter(event => event.delta === true);
    const answer = (deltas.length ? deltas : messages.slice(-1)).map(event => {
      const content = event.message?.content ?? event.content ?? event.text;
      if (typeof content === 'string') return content;
      if (Array.isArray(content)) return content.filter(block => block?.type === 'text').map(block => block.text).join('');
      return '';
    }).join('');
    if (answer.trim()) return answer;
    const types = [...new Set(output.map(event => event?.type || event?.role || typeof event))];
    throw new Error('CLI вернул массив без ответа модели. Типы элементов: ' + types.slice(0, 8).join(', ') + '.');
  }
  if (output?.is_error || output?.error) throw new Error('CLI сообщил об ошибке.');
  const answer = output?.result ?? output?.response ?? output;
  if (typeof answer === 'string' && answer.trim()) return answer;
  if (['reply', 'configure', 'list'].includes(answer?.action) || Array.isArray(answer?.items) || Array.isArray(answer?.states) || typeof answer?.reason === 'string') return JSON.stringify(answer);
  const fields = Object.keys(output || {}).slice(0, 8).join(', ');
  throw new Error('Неожиданные поля ответа CLI: ' + (fields || 'нет') + '.');
}

function runGigaCode(prompt) {
  return new Promise((resolve, reject) => {
    const request = 'Ответь только текстом. Для этой задачи не нужны инструменты, файлы и команды.\n' + prompt;
    execFile('gigacode', ['-p', request, '--output-format', 'json'], {
      timeout: 90_000,
      maxBuffer: 512 * 1024,
      windowsHide: true
    }, (error, stdout) => {
      if (error) {
        if (error.code === 'ENOENT') {
          reject(new Error('Команда gigacode не найдена в PATH. Проверьте gigacode --help в этом терминале.'));
        } else if (error.killed) {
          reject(new Error('GigaCode CLI не ответил за 90 секунд.'));
        } else {
          reject(new Error('GigaCode CLI завершился с ошибкой. Проверьте его авторизацию и неинтерактивный запуск в терминале.'));
        }
        return;
      }
      try {
        resolve(readCliAnswer(stdout));
      } catch (error) {
        reject(new Error(error instanceof SyntaxError
          ? 'Вывод GigaCode CLI не удалось прочитать как JSON.'
          : error.message));
      }
    });
  });
}

const server = createServer(async (request, response) => {
  const origin = request.headers.origin;
  if (request.headers.host !== host + ':' + port ||
      (origin && origin !== 'null' && !/^https?:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?$/.test(origin))) {
    reply(response, 403, { error: 'Доступен только локальный интерфейс плагина.' });
    return;
  }
  if (origin) response.setHeader('Access-Control-Allow-Origin', origin);
  response.setHeader('Vary', 'Origin');
  if (request.url !== '/plan') {
    reply(response, 404, { error: 'Маршрут не найден.' });
    return;
  }
  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      'Access-Control-Allow-Private-Network': 'true'
    });
    response.end();
    return;
  }
  if (request.method !== 'POST' || request.headers.authorization !== 'Bearer ' + token) {
    reply(response, 401, { error: 'Введите действующий код подключения из терминала.' });
    return;
  }

  const chunks = [];
  let bytes = 0;
  let prompt;
  try {
    for await (const chunk of request) {
      bytes += chunk.length;
      if (bytes > 256 * 1024) {
        reply(response, 413, { error: 'Запрос слишком большой.' });
        return;
      }
      chunks.push(chunk);
    }
    ({ prompt } = JSON.parse(Buffer.concat(chunks).toString('utf8')));
    if (typeof prompt !== 'string' || !prompt.trim()) {
      reply(response, 400, { error: 'Запрос должен содержать непустой текст prompt.' });
      return;
    }
    if (prompt.length > 48000) {
      reply(response, 413, { error: 'Контекст диалога слишком большой: ' + prompt.length + ' символов при лимите 48000. Запрос не отправлен в GigaCode.' });
      return;
    }
  } catch {
    reply(response, 400, { error: 'Некорректный запрос.' });
    return;
  }
  if (running) {
    reply(response, 409, { error: 'GigaCode уже обрабатывает запрос. Попробуйте после его завершения.' });
    return;
  }
  running = true;
  const startedAt=Date.now();
  console.log('[Pixso] Запускаю GigaCode CLI · '+prompt.length+' символов.');
  try {
    const result=await runGigaCode(prompt);
    const elapsedMs=Date.now()-startedAt;
    console.log('[Pixso] Ответ CLI · '+elapsedMs+' мс · '+result.length+' символов.');
    reply(response, 200, { result, metrics:{elapsedMs,promptCharacters:prompt.length,resultCharacters:result.length} });
  } catch (error) {
    console.error('[Pixso] Ошибка через '+(Date.now()-startedAt)+' мс · ' + error.message);
    reply(response, 502, { error: error.message });
  } finally {
    running = false;
  }
});

server.on('error', error => {
  console.error('Не удалось запустить мост GigaCode:', error.message);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log('Мост Pixso · проверка формата CLI:', fileURLToPath(import.meta.url));
  console.log('Мост GigaCode запущен на http://' + host + ':' + port);
  console.log('Код подключения для Pixso: ' + token);
});
