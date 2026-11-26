/**
 * Invoice calculations for a small shop.
 * Amounts are numbers in the invoice currency (e.g. 10.5 = 10.50).
 */

/** Price of one line: unit price times quantity. */
export function lineTotal(item) {
  return item.unitPrice * item.quantity;
}

/** Sum of every line. */
export function subtotal(items) {
  return items.reduce((sum, item) => sum + lineTotal(item), 0);
}

/** Takes `percent` off `amount`. */
export function applyDiscount(amount, percent) {
  return amount - (amount * percent) / 100;
}

/** What the customer pays. */
export function invoiceTotal(items, { discountPercent = 0 } = {}) {
  return applyDiscount(subtotal(items), discountPercent);
}
