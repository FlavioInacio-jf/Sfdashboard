import * as yup from "yup";

export const createSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name field is required.")
    .min(2, "The name must be at least 2 characters long.")
    .max(100, "The name must have a maximum of 100 characters."),
  email: yup.string().email().notRequired(),
  cpf: yup.string().min(14).max(14).required("Cpf field is required"),
});
