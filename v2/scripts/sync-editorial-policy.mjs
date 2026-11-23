import { readFileSync, writeFileSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const policy = JSON.parse(readFileSync(new URL('knowledge/editorial-policy.json', root), 'utf8'));
const ids = new Set();
const sources = new Set(policy.sources.map(source => source.id));
for (const rule of policy.rules) {
  if (!rule.id || ids.has(rule.id) || !rule.rule || !rule.sources.length ||
      rule.sources.some(source => !sources.has(source.id)) ||
      rule.profiles.some(profile => !policy.profiles[profile]) ||
      rule.scopes.some(scope => !['catalog', 'copy', 'states'].includes(scope))) throw Error('Invalid editorial rule: ' + rule.id);
  ids.add(rule.id);
}
const file = new URL('main.js', root);
const source = readFileSync(file, 'utf8');
const begin = '// BEGIN GENERATED EDITORIAL POLICY';
const end = '// END GENERATED EDITORIAL POLICY';
const block = `${begin}\n// Edit v2/knowledge/editorial-policy.json, then run node v2/scripts/sync-editorial-policy.mjs.\nconst editorialPolicy = ${JSON.stringify(policy, null, 2)};\n${end}`;
const first = source.indexOf(begin), last = source.indexOf(end);
if ((first < 0) !== (last < 0)) throw Error('Incomplete editorial policy block');
const updated = first < 0 ? block + '\n\n' + source : source.slice(0, first) + block + source.slice(last + end.length);
if (process.argv.includes('--check')) {
  if (updated !== source) throw Error('Embedded editorial policy is stale. Run node v2/scripts/sync-editorial-policy.mjs.');
} else writeFileSync(file, updated);
console.log(`Editorial policy: ${ids.size} rules (${policy.version})`);
