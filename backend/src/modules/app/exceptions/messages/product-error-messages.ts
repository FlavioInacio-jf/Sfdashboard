import { ICustomErrorDTO } from "../../dtos";

export const PRODUCT_NOT_FOUND: ICustomErrorDTO = {
  title: "Produto não encontrado",
  detail: "Produto não encontrado",
  code: 404,
};

export const PRODUCT_NOT_HAVE_ENOUGH_STOCK: ICustomErrorDTO = {
  title: "Produto não tem estoque suficiente para a quantidade solicitada",
  detail: "Não há estoque suficiente do produto para a quantidade solicitada",
  code: 409,
};

export const BAR_CODE_ALREADY_EXIST = (barCode: string): ICustomErrorDTO => ({
  title: "Um produto já foi cadastrado com esse código de barras",
  detail: `Um produto já foi cadastrado com o código de barras ${barCode}`,
  code: 409,
});
