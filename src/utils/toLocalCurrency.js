function getCurrenyPrefix(currency) {
  switch (currency) {
    case 'IDR':
      return 'Rp. ';
    default:
      return '$';
  }
}

export default function toLocalCurrency(price, currency = 'IDR') {
  const currencyPrefix = getCurrenyPrefix(currency);
  return `${currencyPrefix}${price && price.toLocaleString()}`;
}
