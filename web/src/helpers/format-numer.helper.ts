export const formatNumberHelper = (number: number) => {
  return new Intl.NumberFormat('pt-BR').format(number);
};
