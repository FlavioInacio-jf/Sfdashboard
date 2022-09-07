export const USER_NOT_FOUND = {
  title: "Usuário não encontrado",
  detail: "Usuário não encontrado",
};

export const EMAIL_ALREADY_EXIST = (email: string) => ({
  title: "Já existe um e-mail cadastrado",
  detail: `Email "${email}" já foi cadastrado`,
});
