import { Router } from "express";
import * as  salesController from "./sales.controller.js";
import * as  salesValidatiions from "./validations/index.js";
import * as  commonValidatiions from "../common/validations/index.js";
const routes = Router();

routes.get("/", salesController.getAllSales);
routes.get("/products", salesController.getProductsToSale);
routes.post("/", salesValidatiions.createNewSaleValidations, salesController.createNewSale);
routes.get("/:id", commonValidatiions.validateParams, salesController.getSaleById);

export default routes