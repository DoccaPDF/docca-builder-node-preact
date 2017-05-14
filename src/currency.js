
/**
 * get an instance of a currency formatter
 *
 * @export
 * @param {String} [$0.locales]  currency locale, eg 'en-US'
 * @param {String} [$0.currency]  currency name, eg 'USD'
 * @param {String} [$0.display]  how to display amount, eg 'symbol'
 * @returns Intl.NumberFormat
 */
export function CurrencyFormatter ({ locales = 'en-US', currency = 'USD', display = 'symbol' } = {}) {
  const formatConfig = {
    locales,
    options: {
      style: 'currency',
      currency,
      currencyDisplay: display
    }
  };
  return new Intl.NumberFormat(formatConfig.locales, formatConfig.options);
}
