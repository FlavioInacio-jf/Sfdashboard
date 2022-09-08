import { CustomErrorType } from "../../types";

export const CLIENT_NOT_FOUND: CustomErrorType = {
  title: "Cliente não encontrado",
  detail: "Cliente não encontrado",
  code: 404,
};

export const CLIENT_CPF_ALREADY_EXIST = (cpf: string): CustomErrorType => ({
  title: "Já existe um cliente com esse CPF cadastrado",
  detail: `CPF "${cpf}" já foi cadastrado`,
  code: 409,
});
