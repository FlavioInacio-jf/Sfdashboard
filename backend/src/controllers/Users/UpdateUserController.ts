import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { UpdateUserService } from "../../services/users/UpdateUserService";

export class UpdateUserController {
  async execute(req: Request, res: Response) {
    const updateUserService = new UpdateUserService();
    try {
      const { id } = req.params;
      const { name, photo_url } = req.body;

      const user = await updateUserService.execute({
        id,
        name,
        photo_url,
      });

      return res.status(201).json({
        message: "User updated successfully",
        result: user,
        status: 201,
      });
    } catch (error) {
      throw new AppError(error.detail || error.message, 400, "/users");
    }
  }
}
