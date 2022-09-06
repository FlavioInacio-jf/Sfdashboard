import { Request, Response } from "express";
import { GetSingleProductService } from "../services";

export class GetSingleProductController {
  async execute(req: Request, res: Response) {
    const getSingleProductService = new GetSingleProductService();

    const { id } = req.params;
    const product = await getSingleProductService.execute({ id });

    return res.status(200).json({ result: product });
  }
}
