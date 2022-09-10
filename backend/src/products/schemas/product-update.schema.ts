import * as yup from "yup";
import { ProductStatus } from "../enums";

export const productUpdateSchema = yup.object().shape({
  title: yup
    .string()
    .min(10, "The title must be at least 10 characters long.")
    .max(100, "The title must have a maximum of 100 characters.")
    .notRequired(),
  price: yup
    .number()
    .min(0, "The minimum value of the price body is 0")
    .notRequired(),
  amount: yup
    .number()
    .min(0, "The minimum value of the amount body is 0")
    .notRequired(),
  status: yup
    .string()
    .equals(
      [Object.values(ProductStatus)],
      `Status must be ${Object.values(ProductStatus)}`,
    )
    .notRequired(),
});
