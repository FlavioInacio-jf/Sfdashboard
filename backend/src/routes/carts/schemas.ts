import * as yup from "yup";

export const createSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Address field is required.")
    .min(1, "The minimum value of the amount body is."),
  product_id: yup.string().uuid().required("Product id field is required."),
});
