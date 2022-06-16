import * as yup from "yup";

export const createSchema = yup.object().shape({
  email: yup
    .string()
    .email("The email field must be of type email")
    .required("E-mail field is required."),
  password: yup
    .string()
    .min(8, "The password must be at least 8 characters long.")
    .required("Password field is required."),
});
