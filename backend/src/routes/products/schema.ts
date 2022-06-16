import * as yup from "yup";

export const createSchema = yup.object().shape({
  title: yup
    .string()
    .required("Name field is required.")
    .min(2, "The name must be at least 2 characters long.")
    .max(100, "The name must have a maximum of 100 characters."),
  price: yup.string().email().required("Email field is required."),
  description: yup.string().url().required("Photo url field is required."),
  amount: yup.string().required("Role field is required."),
  photo: yup.array().required("Permissions field is required."),
  category: yup
    .string()
    .required("Password unit field is required.")
    .min(8, "The password must at be at least 8 characters long."),
  status: yup
    .string()
    .required("Password unit field is required.")
    .min(8, "The password must at be at least 8 characters long."),
  physical_condition: yup
    .string()
    .required("Password unit field is required.")
    .min(8, "The password must at be at least 8 characters long."),
});
