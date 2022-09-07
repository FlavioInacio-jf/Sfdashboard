export const BAR_CODE_ALREADY_EXIST = (barCode: string) => ({
  title: "Um produto já foi cadastrado com esse código de barras",
  detail: `Um produto já foi cadastrado com o código de barras ${barCode}`,
});

export const PRODUCT_NOT_FOUND = {
  title: "Produto não encontrado",
  detail: "Produto não encontrado",
};
