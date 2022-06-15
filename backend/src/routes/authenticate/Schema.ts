import Joi from "joi";
import { Validator } from "../../middlewares/Validator";

export class Schema extends Validator {
  static get create() {
    const schema = {
      body: Joi.object({
        email: Joi.string().min(3).max(50).required().label("Email"),
        password: Joi.string().required().label("Password"),
      }),
    };

    return this.validate(schema);
  }
}
