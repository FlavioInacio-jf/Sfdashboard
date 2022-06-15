import { Router } from "express";
import { CreateCommentController } from "../../controllers/comments/CreateCommentController";
import { DeleteCommentController } from "../../controllers/comments/DeleteCommentController";
import { GetAllProductCommentsController } from "../../controllers/comments/GetAllProductCommentsController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";

const commentsRoutes = Router();

const getAllProductCommentsController = new GetAllProductCommentsController();
const createCommentController = new CreateCommentController();
const deleteCommentController = new DeleteCommentController();

const ensureAuthenticated = new EnsureAuthenticated();

commentsRoutes.use(ensureAuthenticated.execute);

commentsRoutes.get("/:product_id", getAllProductCommentsController.execute);
commentsRoutes.post("/", createCommentController.execute);
commentsRoutes.delete("/:id", deleteCommentController.execute);

export { commentsRoutes };
