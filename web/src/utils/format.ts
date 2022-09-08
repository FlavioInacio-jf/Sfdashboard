export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  maximumSignificantDigits: 3
});

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('pt-BR').format(number);
};

export const convertPriceToNumber = (price: number): number => {
  let price_string = price.toString();
  price_string = price_string.replace('R$', '');
  price_string = price_string.replace('.', '');
  price_string = price_string.replace(',', '');

  return Number(price_string);
};

export const displayDate = (date: Date) => {
  const unformattedDate = new Date(date);
  return unformattedDate.toLocaleDateString('pt-br', {
    day: 'numeric',
    month: 'short',
    weekday: 'short'
  });
};
