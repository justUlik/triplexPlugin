import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const knowledge = JSON.parse(readFileSync(new URL('knowledge/triplex-components.json', root), 'utf8'));
const names = new Set();
for (const entry of knowledge.components) {
  if (!entry.name || !entry.use || !entry.source || !entry.storybook || names.has(entry.name)) throw Error('Invalid knowledge entry: ' + entry.name);
  names.add(entry.name);
}
const path = fileURLToPath(new URL('main.js', root));
const start = '// BEGIN GENERATED TRIPLEX KNOWLEDGE';
const end = '// END GENERATED TRIPLEX KNOWLEDGE';
const block = `${start}\n// Edit knowledge/triplex-components.json, then run node scripts/sync-triplex-knowledge.mjs.\nconst triplexKnowledge = ${JSON.stringify(knowledge, null, 2)};\n${end}`;
const source = readFileSync(path, 'utf8');
const first = source.indexOf(start), last = source.indexOf(end);
if ((first < 0) !== (last < 0)) throw Error('Incomplete generated block');
const updated = first < 0 ? block + '\n\n' + source : source.slice(0, first) + block + source.slice(last + end.length);
if (process.argv.includes('--check')) {
  if (updated !== source) throw Error('Embedded Triplex knowledge is stale. Run node scripts/sync-triplex-knowledge.mjs.');
} else writeFileSync(path, updated);
console.log(`Triplex knowledge: ${names.size} components (${knowledge.version})`);
