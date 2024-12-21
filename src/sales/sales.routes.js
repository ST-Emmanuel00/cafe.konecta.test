import { Router } from "express";
import * as  salesController from "./sales.controller.js";

const routes = Router();

routes.get("/", salesController.getProductsToSale);

export default routes