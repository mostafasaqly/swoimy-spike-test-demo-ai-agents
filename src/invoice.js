/**
 * Invoice calculations for a small shop.
 * Amounts are numbers in the invoice currency (e.g. 10.5 = 10.50).
 */

function validateDiscountPercent(percent) {
  if (percent < 0 || percent > 100) {
    throw new RangeError('discount percent must be between 0 and 100');
  }
}

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
  validateDiscountPercent(percent);
  return amount - (amount * percent) / 100;
}

/** Format a monetary amount for display in a locale. */
export function formatCurrency(amount, currency, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** What the customer pays. */
export function invoiceTotal(items, { discountPercent = 0 } = {}) {
  validateDiscountPercent(discountPercent);
  return applyDiscount(subtotal(items), discountPercent);
}
