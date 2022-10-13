import { ICustomErrorDTO } from "../../dtos";

export const USER_NOT_FOUND: ICustomErrorDTO = {
  title: "Usuário não encontrado",
  detail: "Usuário não encontrado",
  code: 404,
};

export const EMAIL_ALREADY_EXIST = (email: string): ICustomErrorDTO => ({
  title: "Já existe um usuário com esse e-mail cadastrado",
  detail: `Email "${email}" já foi cadastrado`,
  code: 409,
});
