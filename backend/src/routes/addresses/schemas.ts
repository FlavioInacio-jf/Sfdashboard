import * as yup from "yup";

export const createSchema = yup.object().shape({
  address: yup
    .string()
    .required("Address field is required.")
    .min(10, "The Address must be at least 10 characters long.")
    .max(120, "The title must have a maximum of 120 characters."),
  county: yup
    .string()
    .required("County field is required.")
    .min(2, "The county must at be at least 2 characters long.")
    .max(30, "The county must have a maximum of 30 characters."),
  cep: yup
    .string()
    .required("Cep field is required.")
    .matches(
      /^[0-9]{5}(?:-[0-9]{3})?$/,
      "Cep field must be only digits and '-'",
    )
    .min(9, "The cep must at be at least 9 characters long.")
    .max(9, "The cep must have a maximum of 9 characters."),
  federative_unit: yup
    .string()
    .required("Federative unit field is required.")
    .matches(
      /^[A-Za-z]+$/,
      "Federative unit field characters must belong to the alphabet.",
    )
    .min(2, "The federative unit must at be at least 2 characters long.")
    .max(2, "The federative unit must have a maximum of 2 characters."),
  district: yup
    .string()
    .required("District unit field is required.")
    .min(2, "The district must at be at least 2 characters long.")
    .max(30, "The district must have a maximum of 30 characters."),
  state: yup
    .string()
    .required("State unit field is required.")
    .min(2, "The state must at be at least 2 characters long.")
    .max(30, "The state must have a maximum of 30 characters."),
  number: yup
    .number()
    .required("Number unit field is required.")
    .min(0, "Number field cannot be less than 0."),
});

export const updateSchema = yup.object().shape({
  address: yup
    .string()
    .notRequired()
    .min(10, "The Address must be at least 10 characters long.")
    .max(120, "The title must have a maximum of 120 characters."),
  county: yup
    .string()
    .notRequired()
    .min(2, "The county must at be at least 2 characters long.")
    .max(30, "The county must have a maximum of 30 characters."),
  cep: yup
    .string()
    .notRequired()
    .matches(
      /^[0-9]{5}(?:-[0-9]{3})?$/,
      "Cep field must be only digits and '-'",
    )
    .min(9, "The cep must at be at least 9 characters long.")
    .max(9, "The cep must have a maximum of 9 characters."),
  federative_unit: yup
    .string()
    .notRequired()
    .matches(
      /^[A-Za-z]+$/,
      "Federative unit field characters must belong to the alphabet.",
    )
    .min(2, "The federative unit must at be at least 2 characters long.")
    .max(2, "The federative unit must have a maximum of 2 characters."),
  district: yup
    .string()
    .notRequired()
    .min(2, "The district must at be at least 2 characters long.")
    .max(30, "The district must have a maximum of 30 characters."),
  state: yup
    .string()
    .notRequired()
    .min(2, "The state must at be at least 2 characters long.")
    .max(30, "The state must have a maximum of 30 characters."),
  number: yup
    .number()
    .notRequired()
    .min(0, "Number field cannot be less than 0."),
});
