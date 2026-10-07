import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const read = file => readFile(new URL(`../${file}`, import.meta.url), 'utf8');

test('every Logistics Library page loads Web Analytics through the shared shell', async () => {
  const shell = await read('site-shell.js');
  const analyticsLoader = shell.slice(0, shell.indexOf('})();') + 5);
  const scripts = [];
  const context = {
    window: {},
    document: {
      querySelector: () => scripts[0] ?? null,
      createElement: () => ({}),
      head: { appendChild: script => scripts.push(script) },
    },
  };
  vm.runInNewContext(analyticsLoader, context);
  vm.runInNewContext(analyticsLoader, context);
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, '/_vercel/insights/script.js');
  assert.equal(scripts[0].defer, true);
  for (const page of ['index.html', 'library.html', 'battery-library.html']) {
    assert.match(await read(page), /site-shell\.js/);
  }
});
