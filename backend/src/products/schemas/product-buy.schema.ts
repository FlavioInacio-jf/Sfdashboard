import * as yup from "yup";

export const productBuySchema = yup.object().shape({
  amount: yup
    .number()
    .required("A quantidade informada é invalida")
    .min(1, "A quantidade minima permitida é 1"),
  client_id: yup
    .string()
    .uuid()
    .required("É necessário informar o id do cliente"),
});
