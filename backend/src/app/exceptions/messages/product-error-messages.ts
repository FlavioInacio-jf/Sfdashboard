import { CustomErrorType } from "../../types";

export const PRODUCT_NOT_FOUND: CustomErrorType = {
  title: "Produto não encontrado",
  detail: "Produto não encontrado",
  code: 404,
};

export const BAR_CODE_ALREADY_EXIST = (barCode: string): CustomErrorType => ({
  title: "Um produto já foi cadastrado com esse código de barras",
  detail: `Um produto já foi cadastrado com o código de barras ${barCode}`,
  code: 409,
});
