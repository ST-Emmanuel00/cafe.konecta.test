import { Router } from "express";
import * as  productsController from "./products.controller.js";

const routes = Router();

routes.get("/", productsController.getAllProducts);

export default routes