import Joi from "joi";
import { Validator } from "../../middlewares/Validator";

export class Schema extends Validator {
  static get create() {
    const schema = {
      body: Joi.object({
        name: Joi.string().min(3).max(200).required().label("Name"),
        email: Joi.string().min(3).max(50).required().label("Email"),
        photo: Joi.string().optional().label("Photo"),
        role: Joi.string().optional().label("Role"),
        permissions: Joi.array().required().label("Permissions"),
        password: Joi.string().required().label("Password"),
        created_at: Joi.any().forbidden(),
        updated_at: Joi.any().forbidden(),
        timestamp: Joi.any().forbidden(),
      }),
    };

    return this.validate(schema);
  }

  static get update() {
    const schema = {
      body: Joi.object({
        name: Joi.string().min(3).max(200).label("Name"),
        photo_url: Joi.string().label("Photo url"),
        created_at: Joi.any().forbidden(),
        updated_at: Joi.any().forbidden(),
        timestamp: Joi.any().forbidden(),
      }),
    };

    return this.validate(schema);
  }
}
