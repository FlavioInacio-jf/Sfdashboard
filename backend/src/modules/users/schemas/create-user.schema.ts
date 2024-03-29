import * as yup from "yup";
import { UserRoleEnum } from "../enums";

export const createSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name field is required.")
    .min(2, "The name must be at least 2 characters long.")
    .max(100, "The name must have a maximum of 100 characters."),
  email: yup.string().email().required("Email field is required."),
  role: yup
    .string()
    .equals([Object.values(UserRoleEnum)], "Role must be admin or user.")
    .required("Role field is required."),
  permissions: yup.array().required("Permissions field is required."),
  password: yup
    .string()
    .required("Password unit field is required.")
    .min(8, "The password must at be at least 8 characters long."),
});
