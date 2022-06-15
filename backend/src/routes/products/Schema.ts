import Joi from "joi";
import { Validator } from "../../middlewares/Validator";

export class Schema extends Validator {
  static get create() {
    const schema = {
      body: Joi.object({
        title: Joi.string().min(3).max(100).required().label("Name"),
        price: Joi.number().required().label("Price"),
        description: Joi.string()
          .min(10)
          .max(600)
          .required()
          .label("Description"),
        amount: Joi.number().required().label("Amount"),
        photo: Joi.string().required().label("Photo url"),
        category: Joi.string().required().label("Category"),
        status: Joi.string().required().label("Status"),
        physical_condition: Joi.string().required().label("Physical Condition"),
        created_at: Joi.any().forbidden(),
        timestamp: Joi.any().forbidden(),
      }),
    };

    return this.validate(schema);
  }

  static get update() {
    const schema = {
      body: Joi.object({
        name: Joi.string().min(3).max(100).label("Name"),
        price: Joi.number().label("Price"),
        description: Joi.string().min(10).max(600).label("Description"),
        amount: Joi.number().label("Amount"),
        photo_url: Joi.string().label("Photo url"),
        category: Joi.string().label("Category"),
        created_at: Joi.any().forbidden(),
        updated_at: Joi.any().forbidden(),
        timestamp: Joi.any().forbidden(),
      }),
    };

    return this.validate(schema);
  }
}
