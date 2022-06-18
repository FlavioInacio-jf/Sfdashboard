import { Request, Response } from "express";
import { UpdateAddressService } from "../../services/addresses/UpdateAddressService";

export class UpdateAddressController {
  async execute(req: Request, res: Response) {
    const updateAddressService = new UpdateAddressService();

    const { id } = req.params;
    const { id: user_id } = req.user;
    const { address, county, cep, federative_unit, district, state, number } =
      req.body;

    const addressUpdated = await updateAddressService.execute({
      user_id,
      id,
      address,
      county,
      cep,
      federative_unit,
      district,
      state,
      number,
    });

    return res.status(201).json({
      message: "Address updated successfully!",
      result: addressUpdated,
      status: 201,
    });
  }
}
