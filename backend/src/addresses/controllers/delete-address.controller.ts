import { Request, Response } from "express";
import { DeleteAddressService } from "../services";

export class DeleteAddressController {
  async execute(req: Request, res: Response) {
    const deleteAddressService = new DeleteAddressService();

    const { id } = req.params;
    const { id: user_id } = req.user;

    const address = await deleteAddressService.execute({ id, user_id });

    return res.status(201).json({
      message: "Address removed successfully",
      result: address,
      status: 201,
    });
  }
}
