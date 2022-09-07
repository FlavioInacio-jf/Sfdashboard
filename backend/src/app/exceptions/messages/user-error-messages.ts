import { CustomErrorType } from "../../types";

export const USER_NOT_FOUND: CustomErrorType = {
  title: "Usuário não encontrado",
  detail: "Usuário não encontrado",
  code: 404,
};

export const EMAIL_ALREADY_EXIST = (email: string): CustomErrorType => ({
  title: "Já existe um e-mail cadastrado",
  detail: `Email "${email}" já foi cadastrado`,
  code: 409,
});
