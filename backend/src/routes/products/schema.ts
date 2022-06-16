import * as yup from "yup";

export const createSchema = yup.object().shape({
  title: yup
    .string()
    .min(10, "The title must be at least 10 characters long.")
    .max(100, "The title must have a maximum of 100 characters.")
    .required("title field is required."),
  price: yup
    .number()
    .min(0, "The minimum value of the price body is 0")
    .required("Price field is required."),
  description: yup
    .string()
    .min(200, "The description must be at least 200 characters long.")
    .max(3000, "The description must have a maximum of 3000 characters.")
    .required("Description field is required."),
  amount: yup
    .number()
    .min(0, "The minimum value of the amount body is 0")
    .required("Amount field is required."),
  photo: yup.string().url().required("Photo field is required."),
  category: yup
    .string()
    .required("Category field is required.")
    .min(2, "The category must at be at least 8 characters long."),
  status: yup
    .string()
    .equals(
      ["published", "draft", "out_of_stock"],
      "Status must be published, draft or out_of_stock.",
    )
    .required("Status field is required."),
  physical_condition: yup
    .string()
    .equals(["old", "new"], "Physical condition must be old or new")
    .required("Physical condition field is required."),
});
