import * as yup from "yup";

export const createSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Amount field is required.")
    .min(1, "The minimum value of the amount body is 1."),
  product_id: yup.string().uuid().required("Product id field is required."),
});

export const updateSchema = yup.object().shape({
  amount: yup.number().required("Amount field is required."),
});
