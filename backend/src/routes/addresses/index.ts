import { Router } from "express";
import { CreateAddressController } from "../../controllers/addresses/CreateAddressController";
import { EnsureAuthenticated } from "../../middlewares/EnsureAuthenticated";

const addressesRoutes = Router();
const createAddressController = new CreateAddressController();

const ensureAuthenticated = new EnsureAuthenticated();
addressesRoutes.use(ensureAuthenticated.execute);

addressesRoutes.post("/", createAddressController.execute);

export { addressesRoutes };
