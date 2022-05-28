export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('pt-BR').format(number);
};

export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  maximumSignificantDigits: 3
});

export const displayDate = (date: Date) => {
  const unformattedDate = new Date(date);
  return unformattedDate.toLocaleDateString('pt-br', {
    day: 'numeric',
    month: 'short',
    year: '2-digit'
  });
};
