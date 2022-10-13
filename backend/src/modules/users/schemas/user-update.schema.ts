import * as yup from "yup";
import { UserRoleEnum } from "../enums";

export const updateSchema = yup.object().shape({
  name: yup
    .string()
    .notRequired()
    .min(2, "The name must be at least 2 characters long.")
    .max(100, "The name must have a maximum of 100 characters."),
  role: yup
    .string()
    .equals([Object.values(UserRoleEnum)], "Role must be admin or user.")
    .notRequired(),
  permissions: yup.array().notRequired(),
});
