import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { CreateAddressService } from "../../services/addresses/CreateAddressService";

export class CreateAddressController {
  async execute(req: Request, res: Response) {
    const createAddressService = new CreateAddressService();
    try {
      const { address, county, cep, federative_unit, district, state, number } =
        req.body;
      const { id: user_id } = req.user;

      const addressCreated = await createAddressService.execute({
        user_id,
        address,
        county,
        cep,
        federative_unit,
        district,
        state,
        number,
      });

      return res.status(201).json({
        message: "Address created successfully",
        result: addressCreated,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 409, "/addresses");
    }
  }
}
