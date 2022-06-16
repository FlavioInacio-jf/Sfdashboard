import * as yup from "yup";

export const createSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title field is required.")
    .min(10, "The title must be at least 10 characters long.")
    .max(120, "The title must have a maximum of 120 characters."),
  description: yup
    .string()
    .required("Description field is required.")
    .min(120, "The description must at be at least 120 characters long.")
    .max(2000, "The title must have a maximum of 2000 characters."),
  product_id: yup.string().uuid().required("Product id field is required."),
});

export const updateSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title field is required.")
    .min(10, "The title must be at least 10 characters long.")
    .max(120, "The title must have a maximum of 120 characters."),
  description: yup
    .string()
    .required("Description field is required.")
    .min(120, "The description must at be at least 120 characters long.")
    .max(2000, "The title must have a maximum of 2000 characters."),
});
