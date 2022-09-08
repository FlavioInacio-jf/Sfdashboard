import * as yup from "yup";

export const updateSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "The name must be at least 2 characters long.")
    .max(100, "The name must have a maximum of 100 characters.")
    .notRequired(),
  email: yup.string().email().notRequired(),
});
