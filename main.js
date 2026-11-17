const formFamilies = [
  [/date[ _-]?(?:picker|field)|дата|календар/i, 'Выбор даты.'],
  [/text[ _-]?area|многостроч/i, 'Многострочный текст или комментарий.'],
  [/checkbox|чекбокс/i, 'Независимый выбор или согласие.'],
  [/radio|радио/i, 'Выбор одного из нескольких видимых вариантов.'],
  [/select|dropdown|combobox|выпадающ/i, 'Выбор из выпадающего списка.'],
  [/switch|toggle|переключатель/i, 'Включение или выключение настройки.'],
  [/input|text[ _-]?field|поле ввода/i, 'Ввод текста, числа или контакта.'],
  [/button|кнопка/i, 'Действие пользователя.']
];
const lightboxKey = 'triplex-lightbox-variants';
const lightboxSizes = ['SM', 'MD', 'LG', 'XL'];
let prepared;
let flow;
let approvedSource;
let pendingFlow;
let flowApproved = false;
let activeFormId;
let activeLibraryAssets;
let activeLightboxComponent;

pixso.showUI(__html__, { width: 880, height: 1360, title: 'Сборка экрана Triplex · 17.11.1' });

function send(type, data) {
  pixso.ui.postMessage({ type, ...data });
}

function formCatalog(assets) {
  const candidates = new Map();
  const familyCounts = new Map();
  for (const asset of assets) {
    if (!asset.key || !['COMPONENT', 'COMPONENT_SET'].includes(asset.type)) continue;
    const path = [...new Set([...(asset.categories || []), asset.containerName, asset.name].filter(Boolean))].join(' / ');
    const family = formFamilies.find(([pattern]) => pattern.test(path));
    if (!family || /(?:^|[ /_-])(?:icon|deprecated|legacy)(?:$|[ /_-])/i.test(path)) continue;
    const [, use] = family;
    const count = familyCounts.get(use) || 0;
    if (count >= 4 || candidates.has(asset.key)) continue;
    familyCounts.set(use, count + 1);
    candidates.set(asset.key, { key: asset.key, type: asset.type, name: path.slice(0, 120), use, variants: asset.variants });
  }
  return [...candidates.values()];
}

function requestFlow({ requirements, feedback, standard }) {
  if (typeof requirements !== 'string' || !requirements.trim()) throw new Error('Вставьте бизнес-требования.');
  if (requirements.length > 12000 || typeof standard !== 'string' || standard.length > 8000 ||
      typeof feedback !== 'string' || feedback.length > 2000) throw new Error('Сократите входной текст.');
  const context = { requirements: requirements.trim(), standard: standard.trim() };
  pendingFlow = context;
  flowApproved = false;
  const prompt = [
    'Спроектируй сценарий одной формы по бизнес-требованиям. Отрази порядок шагов, условия веток и сообщения пользователю.',
    'Если требований не хватает, задай вопросы. Не придумывай бизнес-правила.',
    'Следуй переданному текстовому стандарту. Значения полей должны быть вымышленными.',
    'Верни только JSON: {"reply":"Пояснение или вопрос","states":[{"name":"Заполненная форма","condition":"Когда показана","values":{"Название компании":"ООО Ромашка"},"errors":[{"field":"ИНН","text":"Введите ИНН"}]}]}.',
    'Для ошибки укажи точный видимый текст и подпись поля, либо пустое поле field для общей ошибки формы. Для остальных состояний используй errors: [].',
    'Дай до 8 состояний после исходного экрана. В values используй точные подписи полей. Для шага без значений верни пустой объект.',
    JSON.stringify({ ...context, previous: flow?.requirements === context.requirements ? { states: flow.states, reply: flow.reply } : undefined, feedback })
  ].join('\n');
  send('flowRequest', { prompt });
}

function reviewFlow({ raw }) {
  if (!pendingFlow || typeof raw !== 'string' || raw.length > 10000) throw new Error('Некорректный ответ GigaCode.');
  const plan = JSON.parse(raw.trim().replace(/^```(?:json)?\s*([\s\S]*?)\s*```$/i, '$1'));
  if (typeof plan?.reply !== 'string' || !Array.isArray(plan.states) || plan.states.length > 8 ||
      plan.states.some(state => typeof state?.name !== 'string' || !state.name.trim() ||
        typeof state.condition !== 'string' || !state.values || typeof state.values !== 'object' ||
        Array.isArray(state.values) || Object.values(state.values).some(value => typeof value !== 'string') ||
        !Array.isArray(state.errors) || state.errors.some(error => typeof error?.field !== 'string' ||
          typeof error.text !== 'string' || !error.text.trim()))) {
    throw new Error('GigaCode вернул некорректный план сценария.');
  }
  flow = { ...pendingFlow, states: plan.states, reply: plan.reply };
  pendingFlow = null;
  send('flowProposal', { reply: plan.reply, states: plan.states });
}

function createStates() {
  if (!flowApproved || !flow?.states.length || !approvedSource) throw new Error('Согласуйте сценарий и соберите исходный экран.');
  const source = getActiveForm(approvedSource.frameId);
  const path = [];
  let body = pixso.getNodeById(approvedSource.bodyId);
  if (!isFormBody(source, body)) throw new Error('Область полей исходного экрана изменилась.');
  while (body.id !== source.id) {
    const parent = body.parent;
    path.unshift(Array.from(parent.children).findIndex(child => child.id === body.id));
    body = parent;
  }
  const copies = [];
  let skipped = 0;
  let errorsPending = 0;
  try {
    for (const [index, state] of flow.states.entries()) {
      const copy = source.clone();
      copies.push(copy);
      copy.name = String(index + 2).padStart(2, '0') + ' · ' + state.name;
      copy.x = source.x + (index + 1) * (source.width + 48);
      copy.y = source.y;
      if (state.errors.length) {
        copy.setPluginData('triplex-flow-errors', JSON.stringify(state.errors));
        errorsPending += state.errors.length;
      }
      const target = path.reduce((node, i) => node.children[i], copy);
      for (const [label, value] of Object.entries(state.values)) {
        const field = Array.from(target.children).find(node => node.type === 'INSTANCE' &&
          (node.name === label || Object.entries(node.componentProperties || {}).some(([key, prop]) =>
            /^(?:label|caption|title|заголовок|подпись)(?:#|$)/i.test(key) && prop.value === label)));
        const key = Object.entries(field?.componentProperties || {}).find(([name, prop]) =>
          /^(?:value|значение)(?:#|$)/i.test(name) && prop.type === 'TEXT')?.[0];
        if (key) field.setProperties({ [key]: value });
        else skipped++;
      }
    }
  } catch (error) {
    for (const copy of copies) copy.remove();
    throw error;
  }
  send('statesCreated', { count: copies.length, skipped, errorsPending });
}

async function prepare({ task, standard }) {
  if (typeof task !== 'string' || !task.trim() || task.length > 3000) {
    throw new Error('Опишите задачу (до 3000 символов).');
  }
  const frame = getActiveForm(activeFormId);
  const body = findFormBody(frame);
  if (!activeLibraryAssets && typeof activeLightboxComponent?.getLibraryInfoAsync === 'function' &&
      typeof pixso.getLibraryByKeyAsync === 'function') {
    const library = await activeLightboxComponent.getLibraryInfoAsync();
    if (library?.key) activeLibraryAssets = (await pixso.getLibraryByKeyAsync(library.key))?.componentList;
  }
  getActiveForm(frame.id);
  if (!isFormBody(frame, body)) throw new Error('Фрейм изменился. Запросите компоненты заново.');
  const catalog = formCatalog(activeLibraryAssets || []);
  if (!catalog.length) throw new Error('Pixso не вернул подходящие поля из библиотеки установленного LightBox.');
  prepared = { frameId: frame.id, bodyId: body.id, catalog, task: task.trim(), standard: typeof standard === 'string' ? standard.trim().slice(0, 8000) : flow?.standard };
  sendPlanRequest();
}

function sendPlanRequest(revision) {
  const { task, catalog, items } = prepared;
  const components = catalog.map(({ name, use }, index) => ({ id: index + 1, name, use }));
  const prompt = [
    'Предложи поля для формы из доступных компонентов Triplex.',
    'Используй только числовые ID из каталога. Верни до 12 элементов в порядке вставки.',
    'Ответь только JSON: {"reply":"Пояснение или вопрос","items":[{"id":1,"text":"Подпись поля","placeholder":"Например, ООО Ромашка","value":"ООО Ромашка","readOnly":false,"error":"Условие — сообщение","optionExample":""}]}.',
    'Подписи на русском, до 120 символов в одну строку. Если подходящих компонентов нет, верни {"reason":"причина"}.',
    'Следуй textStandard для всех подписей и подсказок. Сохраняй термины бизнес-требований.',
    'Для заполняемых полей предложи вымышленное значение value по задаче. Плейсхолдер и значение — разные свойства. Если нужен пустой экран или компонент не принимает текстовое значение, пропусти value.',
    'Для текстовых полей предложи короткую подсказку по задаче. Используй точный плейсхолдер, если пользователь его указал. Для кнопок и чекбоксов пропусти placeholder.',
    'В error перечисли известные ошибки, по одной строке «условие — сообщение». Если правил нет, оставь пустую строку.',
    'Для поля только для чтения укажи readOnly: true. Для списка кошельков укажи в optionExample короткий вымышленный пример пункта с именем, ID и балансом.',
    'Если есть revision, отредактируй текущий список по этим правкам и верни весь новый список. Сохрани позиции, которые пользователь не просил менять.',
    JSON.stringify({
      task, components, revision, requirements: flow?.requirements, textStandard: prepared.standard, states: flow?.states.map(({ name, condition }) => ({ name, condition })),
      currentItems: revision ? items.map(({ id, text, placeholder, value, readOnly, error, optionExample }) => ({ id, text, placeholder, value, readOnly, error, optionExample })) : undefined
    })
  ].join('\n');
  send('prepared', { prompt });
}

async function review(raw) {
  if (!prepared) throw new Error('Сначала запросите компоненты.');
  if (typeof raw !== 'string' || raw.length > 30000) throw new Error('Некорректный ответ GigaCode.');
  let plan;
  try {
    plan = JSON.parse(raw.trim().replace(/^```(?:json)?\s*([\s\S]*?)\s*```$/i, '$1'));
  } catch {
    throw new Error('GigaCode вернул ответ без плана компонентов.');
  }
  if (typeof plan?.reason === 'string') throw new Error(plan.reason.slice(0, 200));
  if (!Array.isArray(plan?.items) || plan.items.length > 12) {
    throw new Error('В плане должно быть не больше 12 полей.');
  }
  const items = plan.items.map(item => {
    if (!Number.isInteger(item?.id) || item.id < 1 || item.id > prepared.catalog.length) {
      throw new Error('GigaCode предложил компонент, которого нет в каталоге.');
    }
    if (typeof item.text !== 'string' || !item.text.trim() || item.text.length > 120 || /[\r\n]/.test(item.text)) {
      throw new Error('GigaCode вернул некорректную подпись поля.');
    }
    const placeholder = item.placeholder;
    if (placeholder != null &&
        (typeof placeholder !== 'string' || placeholder.length > 120 || /[\r\n]/.test(placeholder))) {
      throw new Error('GigaCode вернул некорректный плейсхолдер.');
    }
    const value = item.value;
    if (value != null && (typeof value !== 'string' || value.length > 120 || /[\r\n]/.test(value))) {
      throw new Error('GigaCode вернул некорректное моковое значение.');
    }
    return { id: item.id, text: item.text.trim(), placeholder: placeholder?.trim(), value: value?.trim(), readOnly: item.readOnly === true, optionExample: typeof item.optionExample === 'string' ? item.optionExample.slice(0, 240) : '', error: typeof item.error === 'string' ? item.error.slice(0, 3000) : '' };
  });
  const parts = new Map();
  for (const id of new Set(items.map(item => item.id))) {
    const asset = prepared.catalog[id - 1];
    let component;
    let set;
    try {
      if (asset.type === 'COMPONENT_SET' && typeof pixso.importComponentSetByKeyAsync === 'function') {
        set = await pixso.importComponentSetByKeyAsync(asset.key);
        component = set?.defaultVariant;
      } else if (asset.type === 'COMPONENT_SET') {
        const variants = Array.from(asset.variants || []).filter(variant => variant.key);
        if (variants.length !== 1) throw new Error('API Pixso не предоставляет importComponentSetByKeyAsync.');
        component = await resolveComponent(variants[0]);
      } else {
        component = await resolveComponent(asset);
        if (component.parent?.type === 'COMPONENT_SET') set = component.parent;
      }
    } catch (error) {
      throw new Error('Импорт «' + asset.name + '»: ' + (error.message || String(error)));
    }
    if (component?.type !== 'COMPONENT') throw new Error('Компонент недоступен: ' + asset.name);
    const variants = [component, ...Array.from(set?.children || []).filter(node =>
      node.type === 'COMPONENT' && node.id !== component.id)];
    parts.set(id, { variants, name: asset.name });
  }
  prepared.items = items.map(item => {
    const part = parts.get(item.id);
    const variant = item.readOnly ? part.variants.findIndex(component => isReadOnly(component.name)) : 0;
    return { ...part, ...item, variant: Math.max(0, variant) };
  });
  prepared.stage = "list";
  const previews = prepared.items.map(item => describeItem(item));
  send('proposal', { target: pixso.getNodeById(prepared.bodyId)?.name, items: previews, reply: plan.reply });
}

function isReadOnly(name) {
  return /(?:^|[,=]\s*)read[ _-]?only(?:\s*=\s*true)?(?=\s*(?:,|$))/i.test(name);
}

async function openProperties() {
  if (prepared?.stage !== 'list' || !prepared.items.length) throw new Error('Сначала согласуйте набор.');
  prepared.index = 0;
  await openCurrentComponent();
}

async function openCurrentComponent() {
  prepared.stage = 'copy';
  const { index, items } = prepared;
  send('componentOpened', { index, total: items.length, item: await previewItem(items[index], false, true) });
}

function requestCopy(revision = '') {
  const { index, items, stage } = prepared || {};
  const item = items?.[index];
  if (!item || stage !== 'copy') {
    throw new Error('Подтвердите свойства компонента.');
  }
  const description = describeItem(item);
  send('copyRequest', { prompt: [
    'Согласуй тексты одного компонента. Следуй текстовому стандарту.',
    'Учитывай выбранные свойства. Укажи каждое возможное состояние ошибки отдельной строкой в error в формате «условие — текст». Используй только известные правила проверки. Если ошибок нет, верни пустую строку.',
    'Верни только JSON: {"reply":"Пояснение или вопрос","text":"Подпись","placeholder":"","value":"","texts":{},"error":""}. Заполни texts согласованными текстами по точным ключам TEXT из component.fields. Для незаполняемых свойств не добавляй ключи.',
    'Если есть revision, внеси только запрошенные изменения.',
    JSON.stringify({ task: prepared.task, requirements: flow?.requirements, standard: prepared.standard,
      component: description, fillKeys: item.fillKeys, revision })
  ].join('\n') });
}

async function reviewCopy(raw) {
  const entry = JSON.parse(raw.trim().replace(/^```(?:json)?\s*([\s\S]*?)\s*```$/i, '$1'));
  if (typeof entry?.text !== 'string' || !entry.text.trim() ||
      ['text', 'placeholder', 'value', 'error'].some(key =>
        entry[key] != null && (typeof entry[key] !== 'string' || entry[key].length > 3000))) {
    throw new Error('GigaCode вернул неполные тексты. Запросите их снова.');
  }
  const { index, items } = prepared;
  const current = items[index];
  const texts = Object.fromEntries(Object.entries(entry.texts || {}).filter(([key, value]) =>
    describeItem(current).fields.some(field => field.key === key && field.type === 'TEXT') && typeof value === 'string' && value.length <= 3000));
  const item = { ...current, texts, text: entry.text, placeholder: entry.placeholder, value: entry.value,
    error: entry.error || '', confirmed: false };
  const preview = await previewItem(item, true);
  item.values = { ...current.values, ...Object.fromEntries(preview.fields
    .filter(field => field.type === 'TEXT' && field.value != null).map(field => [field.key, field.value])) };
  items[index] = item;
  prepared.stage = 'copy';
  send('copyOpened', { index, total: items.length, item: preview, reply: entry.reply });
}

const instanceLabels = new WeakMap();

function editableProperties(component) {
  const properties = Object.entries({
    ...(component.parent?.type === 'COMPONENT_SET' ? component.parent.componentPropertyDefinitions : {}),
    ...component.componentPropertyDefinitions
  }).filter(([, property]) => property.type === 'TEXT' || property.type === 'BOOLEAN');
  if (properties.some(([key, property]) => property.type === 'TEXT' && isLabel(key))) return properties;
  const label = instanceLabels.get(component);
  if (label) properties.push(label);
  return properties;
}

function findInstanceLabel(instance) {
  const labels = [];
  function visit(node, path) {
    if (node.visible === false) return;
    if (node.type === 'TEXT' && (isLabel(node.name) || isLabel(node.characters))) {
      labels.push(['Label#layer:' + path.join('.'), { type: 'TEXT', defaultValue: node.characters }]);
    }
    Array.from(node.children || []).forEach((child, index) => visit(child, [...path, index]));
  }
  Array.from(instance.children || []).forEach((child, index) => visit(child, [index]));
  return labels.length === 1 ? labels[0] : undefined;
}

function isLabel(name) {
  return /^(?:label|caption|title|field[ _-]?label|заголовок|подпись)(?:#|$)/i.test(name);

}

function describeItem(item, suggest = false, showAllFields = false) {
  const fields = editableProperties(item.variants[item.variant]);
  const textKeys = fields.filter(([, property]) => property.type === 'TEXT').map(([key]) => key);
  const overrides = new Map(Object.entries(item.texts || {}));
  const copy = [];
  const put = (title, matches, value) => {
    const key = textKeys.find(key => matches(key) && (!item.fillKeys || item.fillKeys.includes(key)));
    if (!key && value != null && value !== '' && !Object.values(item.texts || {}).includes(value)) {
      copy.push({ title, value });
    }
    if (key && value != null && !overrides.has(key)) overrides.set(key, value);
    return Boolean(key);
  };
  const label = put('Подпись', isLabel, item.text);
  const placeholder = put('Плейсхолдер', key => /^(?:placeholder|плейсхолдер|заполнитель)(?:#|$)/i.test(key), item.placeholder);
  const value = put('Моковое значение', key => /^(?:value|input[ _-]?value|значение|введённый текст)(?:#|$)/i.test(key), item.value);
  return {
    name: item.name, text: item.text, copy, error: item.error, fillKeys: item.fillKeys,
    readOnly: isReadOnly(item.variants[item.variant].name), requestedReadOnly: item.readOnly, optionExample: item.optionExample,
    missing: [!label && 'подпись', item.placeholder && !placeholder && 'плейсхолдер',
      item.value && !value && 'моковое значение'].filter(Boolean),
    variant: item.variant, variants: item.variants.map(component => component.name),
    fields: fields.filter(([key, property]) => property.type !== 'TEXT' ||
      showAllFields || !item.fillKeys || item.fillKeys.includes(key)).map(([key, property]) => ({
      key, type: property.type,
      value: suggest && overrides.has(key) ? overrides.get(key) : item.values && Object.prototype.hasOwnProperty.call(item.values, key)
        ? item.values[key] : overrides.get(key) ?? property.defaultValue
    }))
  };
}

async function configureItem({ index, variant, values, error, live }, confirm, render = true) {
  if (prepared?.stage !== 'copy') throw new Error('Сначала согласуйте набор.');
  const item = prepared?.items?.[index];
  if (!item || index !== prepared.index || !Number.isInteger(variant) || !item.variants[variant]) throw new Error('Компонент или вариант недоступен.');
  if (variant !== item.variant) {
    const compatible = new Map(editableProperties(item.variants[variant]));
    const priorValues = Object.entries(values || item.values || {});
    item.variant = variant;
    item.values = Object.fromEntries(priorValues.filter(([key, value]) =>
      compatible.get(key)?.type === (typeof value === 'boolean' ? 'BOOLEAN' : 'TEXT')));
    values = undefined;
    if (typeof error === 'string') item.error = error.trim().slice(0, 3000);
    item.fillKeys = undefined;
  }
  item.confirmed = false;
  if (confirm || values) {
    const fields = new Map(editableProperties(item.variants[variant]));
    if (!values || Object.entries(values).some(([key, value]) => {
      const type = fields.get(key)?.type;
      return type === 'TEXT' ? typeof value !== 'string' || value.length > 3000
        : type !== 'BOOLEAN' || typeof value !== 'boolean';
    })) throw new Error('Проверьте свойства компонента.');
    item.values = { ...item.values, ...values };
    if (prepared.stage === 'copy' && typeof error === 'string') item.error = error.trim().slice(0, 3000);
    item.confirmed = confirm;
  }
  if (confirm) {
    prepared.index++;
    if (prepared.index === prepared.items.length) {
      prepared.stage = 'ready';
      send('readyToApply');
    } else {
      await openCurrentComponent();
    }
    return;
  }
  if (render) send(live ? 'itemPreview' : 'itemConfigured', { index, item: await previewItem(item, false, prepared.stage === 'properties'), confirmed: item.confirmed });
}

function readLightboxes() {
  return JSON.parse(pixso.root.getPluginData(lightboxKey) || '{}');
}

async function findLibraryLightbox(size, diagnostics) {
  if (typeof pixso.getLibraryListAsync !== 'function' || typeof pixso.getLibraryByKeyAsync !== 'function') {
    diagnostics.push('В этой версии API отсутствует метод чтения библиотек.');
    return null;
  }
  const list = await pixso.getLibraryListAsync();
  const listed = (Array.isArray(list) ? list : [list]).filter(item => item?.key);
  const libraries = listed.filter(item => item.subscribed);
  diagnostics.push('библиотек: ' + listed.length + ', подключённых: ' + libraries.length);
  const results = await Promise.allSettled(libraries.map(item => pixso.getLibraryByKeyAsync(item.key)));
  const matches = new Map();
  const isLightbox = name => /(?:^|\/)\s*light[ _-]*box(?=$|[\s/_,(-])/i.test(name || '');
  const hasSize = name => (name || '').toUpperCase().split(/[^A-Z0-9]+/).includes(size);
  const assets = results.flatMap(result =>
    result.status === 'fulfilled' ? result.value?.componentList || [] : []);
  diagnostics.push('элементов каталога: ' + assets.length);
  const lightboxAssets = new Set();
  async function collect(components, libraryAssets) {
    for (const asset of components) {
      const path = [asset.name, asset.containerName, asset.pageName, ...(asset.categories || [])];
      if (!path.some(isLightbox)) continue;
      const variantNames = (asset.variants || []).slice(0, 4).map(variant => variant.name).filter(Boolean);
      lightboxAssets.add(asset.type + ' ' + [asset.containerName, asset.name].filter(Boolean).join(' / ') +
        (variantNames.length ? ' [' + variantNames.join(', ') + ']' : ''));
      if (asset.type === 'COMPONENT_SET') {
        const namedSize = hasSize(asset.name);
        const variants = (asset.variants || []).filter(variant => variant.key && hasSize(variant.name));
        if (variants.length && !namedSize) {
          for (const variant of variants) matches.set(variant.key, { variant, libraryAssets });
        } else if (asset.key && typeof pixso.importComponentSetByKeyAsync === 'function') {
          const set = await pixso.importComponentSetByKeyAsync(asset.key);
          if (namedSize && set.defaultVariant?.type === 'COMPONENT') {
            const variant = set.defaultVariant;
            matches.set(variant.key || variant.id, { variant, libraryAssets });
            continue;
          }
          for (const variant of set.children) {
            if (variant.type === 'COMPONENT' && (hasSize(variant.name) ||
                Object.values(variant.variantProperties || {}).some(value => value.trim().toUpperCase() === size))) {
              matches.set(variant.key || variant.id, { variant, libraryAssets });
            }
          }
        }
      } else if (asset.type === 'COMPONENT' && asset.key && hasSize(asset.name)) {
        matches.set(asset.key, { variant: asset, libraryAssets });
      }
    }
  }
  for (const result of results) {
    const components = result.status === 'fulfilled' && result.value?.componentList;
    if (components) await collect(components, components);
  }
  if (!matches.size && typeof pixso.getLibraryComponentsInUse === 'function') {
    const used = pixso.getLibraryComponentsInUse();
    diagnostics.push('используемых компонентов: ' + used.length);
    await collect(used);
  }
  if (matches.size > 1) throw new Error('В подключённых библиотеках найдено несколько вариантов LightBox ' + size + '.');
  if (!matches.size && results.some(result => result.status === 'rejected')) {
    throw new Error('Pixso не вернул содержимое одной из подключённых библиотек.');
  }
  diagnostics.push('записей LightBox: ' + lightboxAssets.size);
  if (!matches.size && lightboxAssets.size) {
    diagnostics.push('найдено: ' + [...lightboxAssets].slice(0, 8).join('; '));
  }
  return matches.values().next().value || null;
}

function getActiveForm(id) {
  const frame = id && pixso.getNodeById(id);
  if (frame?.type !== 'FRAME' || frame.removed || frame.parent?.id !== pixso.currentPage.id) {
    throw new Error('Поставьте LightBox на текущую страницу.');
  }
  return frame;
}

function isFormBody(frame, body) {
  if (body?.type !== 'FRAME' || body.removed || !['VERTICAL', 'HORIZONTAL'].includes(body.layoutMode)) return false;
  for (let parent = body.parent; parent; parent = parent.parent) {
    if (parent.id === frame.id) return true;
    if (parent.type === 'INSTANCE' || parent.type === 'COMPONENT') return false;
  }
  return false;
}

function findFormBody(frame) {
  const [selected] = pixso.currentPage.selection;
  if (pixso.currentPage.selection.length === 1 && selected.id !== frame.id) {
    if (isFormBody(frame, selected)) return selected;
    for (let parent = selected.parent; parent && parent.id !== frame.id; parent = parent.parent) {
      if (parent.type === 'INSTANCE') {
        throw new Error('Выбран «' + selected.name + '» внутри экземпляра «' + parent.name +
          '». Для вставки выберите редактируемый фрейм вне этого экземпляра.');
      }
    }
    throw new Error('Выбран «' + selected.name + '» (' + selected.type +
      ', layout: ' + (selected.layoutMode || 'нет') + '). Нужен редактируемый фрейм с автолейаутом внутри поставленного LightBox.');
  }
  const children = Array.from(frame.children || []).filter(node => node.type === 'FRAME');
  const bodies = [...children, ...children.flatMap(node => Array.from(node.children || []))]
    .filter(node => /^body[ _-]*page$/i.test(node.name) && isFormBody(frame, node));
  if (bodies.length === 1) return bodies[0];
  throw new Error('Выделите фрейм с автолейаутом для полей внутри поставленного LightBox.');
}

async function placeLightbox(size) {
  if (!lightboxSizes.includes(size)) throw new Error('Выберите размер LightBox.');
  const page = pixso.currentPage;
  const diagnostics = [];
  const match = await findLibraryLightbox(size, diagnostics) || { variant: readLightboxes()[size] };
  if (!match.variant) throw new Error('LightBox ' + size + ' не найден. Ответ Pixso — ' + diagnostics.join(' · ') + '.');
  const variant = match.variant;
  const component = typeof variant.createInstance === 'function' ? variant : await resolveComponent(variant);
  if (pixso.currentPage.id !== page.id) throw new Error('Страница изменилась. Выберите размер заново.');

  const previous = activeFormId && pixso.getNodeById(activeFormId);
  const instance = component.createInstance();
  let frame;
  try {
    frame = instance.detachInstance();
    frame.name = 'LightBox / ' + size;
    frame.x = previous?.parent?.id === page.id ? previous.x + previous.width + 48 : pixso.viewport.center.x - frame.width / 2;
    frame.y = previous?.parent?.id === page.id ? previous.y : pixso.viewport.center.y - frame.height / 2;
    page.selection = [frame];
    pixso.viewport.scrollAndZoomIntoView([frame]);
  } catch (error) {
    const created = frame || instance;
    if (!created.removed) created.remove();
    throw error;
  }
  activeFormId = frame.id;
  approvedSource = null;
  activeLibraryAssets = match.libraryAssets;
  activeLightboxComponent = component;
  prepared = null;
  send('formPlaced', { size });
}

async function resolveComponent(binding) {
  let component = binding.id ? pixso.getNodeById(binding.id) : null;
  if (component?.type !== 'COMPONENT' && binding.key) {
    component = await pixso.importComponentByKeyAsync(binding.key);
  }
  if (component?.type !== 'COMPONENT') throw new Error('Компонент недоступен: ' + binding.name);
  return component;
}

async function setInstanceValues(instance, values, name) {
  const overrides = Object.create(null);
  const layers = [];
  const fields = instance.componentProperties || {};
  for (const [key, value] of Object.entries(values)) {
    if (key.startsWith('Label#layer:')) {
      layers.push([key, value]);
      continue;
    }
    overrides[key] = value;
    const type = typeof value === 'boolean' ? 'BOOLEAN' : 'TEXT';
    if (fields[key]?.type !== type) throw new Error('Недоступно свойство «' + key + '» в «' + name + '».');
  }
  if (Object.keys(overrides).length) {
    if (typeof instance.setProperties !== 'function') throw new Error('Pixso не поддерживает изменение свойств экземпляра через setProperties.');
    instance.setProperties({ ...overrides });
  }
  for (const [key, value] of layers) {
    const layer = key.slice('Label#layer:'.length).split('.')
      .reduce((node, index) => node?.children?.[Number(index)], instance);
    if (layer?.type !== 'TEXT' || (!isLabel(layer.name) && !isLabel(layer.characters))) {
      throw new Error('Вложенная подпись недоступна в «' + name + '».');
    }
    if (layer.characters === value) continue;
    const fonts = typeof layer.getRangeAllFontNames === 'function' && layer.characters.length
      ? layer.getRangeAllFontNames(0, layer.characters.length) : [layer.fontName];
    for (const font of fonts) await pixso.loadFontAsync(font);
    layer.characters = value;
    if (layer.characters !== value) throw new Error('Pixso не применил текст вложенной подписи в «' + name + '».');
  }
}

async function previewItem(item, suggest, showAllFields = false) {
  const component = item.variants[item.variant];
  let description;
  let instance;
  try {
    instance = component.createInstance();
    instanceLabels.set(component, findInstanceLabel(instance));
    description = describeItem(item, suggest, showAllFields);
    instance.x = pixso.viewport.center.x + 100000;
    instance.y = pixso.viewport.center.y;
    const values = Object.fromEntries(description.fields.filter(field => field.value != null)
      .map(field => [field.key, field.value]));
    await setInstanceValues(instance, values, item.name);
    if (typeof instance.exportAsync !== 'function') throw new Error('Pixso не поддерживает экспорт экземпляра через exportAsync.');
    const png = await instance.exportAsync({ format: 'PNG' });
    return { ...description, png: Array.from(png) };
  } catch (error) {
    return { ...(description || describeItem(item, suggest, showAllFields)), previewError: error.message || String(error) };
  } finally {
    if (instance && !instance.removed) instance.remove();
  }
}

async function insert(parent, item) {
  const instance = item.variants[item.variant].createInstance();
  try {
    parent.appendChild(instance);
    await setInstanceValues(instance, item.values, item.name);
    if (item.error) instance.setPluginData('triplex-field-error', item.error);
    return instance;
  } catch (error) {
    if (!instance.removed) instance.remove();
    throw error;
  }
}

async function apply() {
  const context = prepared;
  if (!context?.items?.length) throw new Error('Сначала получите список компонентов.');
  if (context.stage !== 'ready' || context.items.some(item => !item.confirmed)) {
    throw new Error('Подтвердите каждый компонент перед вставкой.');
  }
  const frame = getActiveForm(context.frameId);
  const body = pixso.getNodeById(context.bodyId);
  if (!isFormBody(frame, body) || activeFormId !== frame.id) {
    throw new Error('Фрейм изменился. Запросите компоненты заново.');
  }
  const width = frame.width;
  const axis = frame.layoutMode === 'VERTICAL' ? 'counterAxisSizingMode' : 'primaryAxisSizingMode';
  const previousSizing = frame[axis];
  const inserted = [];
  try {
    for (const item of context.items) inserted.push(await insert(body, item));
    if (Math.abs(frame.width - width) > 0.1) {
      if (previousSizing === 'AUTO') frame[axis] = 'FIXED';
      frame.resizeWithoutConstraints(width, frame.height);
    }
  } catch (error) {
    for (const instance of inserted) instance.remove();
    if (frame[axis] !== previousSizing) frame[axis] = previousSizing;
    throw error;
  }
  prepared = null;
  pixso.currentPage.selection = [body];
  approvedSource = { frameId: frame.id, bodyId: body.id };
  send('applied', { count: inserted.length, target: body.name });
}

let messageQueue = Promise.resolve();
pixso.ui.onmessage = message => {
  messageQueue = messageQueue.then(() => handleMessage(message));
};

async function handleMessage(message) {
  try {
    switch (message.type) {
      case 'init':
        send('ready', { lightboxSizes });
        break;
      case 'requestFlow':
        requestFlow(message);
        break;
      case 'reviewFlow':
        reviewFlow(message);
        break;
      case 'invalidateFlow':
        pendingFlow = null;
        flowApproved = false;
        break;
      case 'approveFlow':
        if (pendingFlow || !flow?.states.length) throw new Error('Сначала получите список состояний для утверждения.');
        flowApproved = true;
        send('flowApproved');
        break;
      case 'createStates':
        createStates();
        break;
      case 'prepare':
        prepared = null;
        await prepare(message);
        break;
      case 'placeLightbox':
        await placeLightbox(message.size);
        break;
      case 'revise': {
        const revision = typeof message.revision === 'string' ? message.revision.trim() : '';
        if (prepared?.stage !== 'list' || !prepared.items || !revision || revision.length > 3000) {
          throw new Error('Опишите правки к предложению (до 3000 символов).');
        }
        sendPlanRequest(revision);
        break;
      }
      case 'review':
        await review(message.raw);
        break;
      case 'openProperties':
        await openProperties();
        break;
      case 'requestCopy':
        if (message.draft && prepared?.stage === 'copy') await configureItem(message.draft, false, false);
        requestCopy(message.revision);
        break;
      case 'reviewCopy':
        await reviewCopy(message.raw);
        break;
      case 'chooseVariant':
      case 'previewItem':
      case 'confirmItem':
        await configureItem(message, message.type === 'confirmItem');
        break;
      case 'unconfirmItem':
        if (prepared?.items?.[message.index]) prepared.items[message.index].confirmed = false;
        break;
      case 'apply':
        await apply();
        break;
    }
  } catch (error) {
    const stage = { prepare: 'Подготовка запроса', review: 'Проверка предложения', apply: 'Вставка полей' }[message.type];
    const detail = error.message || String(error);
    send('error', { message: stage ? stage + ' — ' + detail : detail });
  }
};
