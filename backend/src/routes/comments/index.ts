import { Router } from "express";
import { CreateCommentController } from "../../controllers/comments/CreateCommentController";
import { DeleteCommentController } from "../../controllers/comments/DeleteCommentController";
import { GetAllProductCommentsController } from "../../controllers/comments/GetAllProductCommentsController";
import { UpdateCommentController } from "../../controllers/comments/UpdateProductController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";
import { validateResource } from "../../middlewares/validateResource";
import { createSchema, updateSchema } from "./schemas";

const commentsRoutes = Router();

const getAllProductCommentsController = new GetAllProductCommentsController();
const createCommentController = new CreateCommentController();
const deleteCommentController = new DeleteCommentController();
const updateCommentController = new UpdateCommentController();

const ensureAuthenticated = new EnsureAuthenticated();

commentsRoutes.use(ensureAuthenticated.execute);

commentsRoutes.get("/:product_id", getAllProductCommentsController.execute);
commentsRoutes.post(
  "/",
  validateResource(createSchema),
  createCommentController.execute,
);
commentsRoutes.delete("/:id", deleteCommentController.execute);
commentsRoutes.patch(
  "/:id",
  validateResource(updateSchema),
  updateCommentController.execute,
);

export { commentsRoutes };
