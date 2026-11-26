import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount, invoiceTotal, lineTotal, subtotal } from '../src/invoice.js';

const items = [
  { name: 'Keyboard', unitPrice: 40, quantity: 2 },
  { name: 'Mouse', unitPrice: 20, quantity: 1 },
];

test('lineTotal multiplies price by quantity', () => {
  assert.equal(lineTotal(items[0]), 80);
});

test('subtotal adds every line', () => {
  assert.equal(subtotal(items), 100);
  assert.equal(subtotal([]), 0);
});

test('applyDiscount takes a percentage off', () => {
  assert.equal(applyDiscount(100, 10), 90);
});

test('invoiceTotal applies the discount to the subtotal', () => {
  assert.equal(invoiceTotal(items), 100);
  assert.equal(invoiceTotal(items, { discountPercent: 25 }), 75);
});
