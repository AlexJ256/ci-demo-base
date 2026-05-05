import test from 'node:test';
import assert from 'node:assert';
import sum from './sum.js';

test('Pruebas de la calculadora', async (t) => {
  
  await t.test('debe sumar correctamente', () => {
    assert.strictEqual(sum(10, 5), 15);
  });

  await t.test('debe sumar correctamente', () => {
    assert.strictEqual(sum(10, 5), 5);
  });
  await t.test('debe sumar correctamente', () => {
    assert.strictEqual(sum(-5, 5), 0);
  });
  await t.test('debe sumar correctamente', () => {
    assert.strictEqual(sum(-10, -5), -15);
  });
  
});
