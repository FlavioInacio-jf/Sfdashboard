import { Router } from "express";
import { CreateCommentController } from "../../controllers/comments/CreateCommentController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";

const commentsRoutes = Router();
const createCommentController = new CreateCommentController();
const ensureAuthenticated = new EnsureAuthenticated();

commentsRoutes.use(ensureAuthenticated.execute);

commentsRoutes.post("/", createCommentController.execute);

export { commentsRoutes };
