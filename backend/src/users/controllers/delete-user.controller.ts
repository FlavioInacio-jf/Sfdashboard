import { Request, Response } from "express";
import { AppError } from "../../app";
import { DeleteUserService } from "../services";

export class DeleteUserController {
  async execute(req: Request, res: Response) {
    const deleteUserService = new DeleteUserService();

    try {
      const { id } = req.params;
      const user = await deleteUserService.execute(id);

      return res.status(201).json({
        message: "User removed successfully",
        result: user,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/users");
    }
  }
}
