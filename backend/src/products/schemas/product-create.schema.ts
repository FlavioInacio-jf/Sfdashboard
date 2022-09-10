import * as yup from "yup";
import { ProductStatus } from "../enums";

export const createSchema = yup.object().shape({
  bar_code: yup
    .string()
    .required("Bar code field is required.")
    .min(12, "The bar code must at be at least 12 characters long."),
  title: yup
    .string()
    .min(10, "The title must be at least 10 characters long.")
    .max(100, "The title must have a maximum of 100 characters.")
    .required("title field is required."),
  price: yup
    .number()
    .min(0, "The minimum value of the price body is 0")
    .required("Price field is required."),
  amount: yup
    .number()
    .min(0, "The minimum value of the amount body is 0")
    .required("Amount field is required."),

  status: yup
    .string()
    .equals(
      [Object.values(ProductStatus)],
      `Status must be ${Object.values(ProductStatus)}`,
    )
    .required("Status field is required."),
});
