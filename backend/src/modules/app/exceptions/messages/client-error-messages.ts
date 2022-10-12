import { ICustomErrorDTO } from "../../dtos";

export const CLIENT_NOT_FOUND: ICustomErrorDTO = {
  title: "Cliente não encontrado",
  detail: "Cliente não encontrado",
  code: 404,
};

export const CLIENT_CPF_ALREADY_EXIST = (cpf: string): ICustomErrorDTO => ({
  title: "Já existe um cliente com esse CPF cadastrado",
  detail: `CPF "${cpf}" já foi cadastrado`,
  code: 409,
});
