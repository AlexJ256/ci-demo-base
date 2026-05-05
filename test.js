import test from 'node:test';
import assert from 'node:assert';
import sum from './sum.js';

  test('debe sumar correctamente', () => {
    assert.strictEqual(sum(10, 5), 15);
  });
  test('debe sumar correctamente', () => {
    assert.strictEqual(sum(10, 5), 5);
  });
  test('debe sumar correctamente', () => {
    assert.strictEqual(sum(-5, 5), 0);
  });
  test('debe sumar correctamente', () => {
    assert.strictEqual(sum(-10, -5), -15);
  });
