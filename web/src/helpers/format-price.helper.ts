export const { format: formatPriceHelper } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  maximumSignificantDigits: 3
});
