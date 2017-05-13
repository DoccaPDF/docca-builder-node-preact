

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
