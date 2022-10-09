export const convertPriceToNumberHelper = (price: number): number => {
  let price_string = price.toString();
  price_string = price_string.replace('R$', '');
  price_string = price_string.replace('.', '');
  price_string = price_string.replace(',', '');

  return Number(price_string);
};
