import { Router } from "express";
import * as  salesController from "./sales.controller.js";

const routes = Router();

routes.get("/", salesController.getAllSales);
routes.get("/products", salesController.getProductsToSale);
routes.post("/", salesController.createNewSale);
routes.get("/:id", salesController.getSaleById);

export default routes