import { Router } from "express";
import * as  productsController from "./products.controller.js";
import * as  productValidatiions from "./validations/index.js";
import * as  commonValidatiions from "../common/validations/index.js";

const routes = Router();

routes.get("/",
    productsController.getAllProducts);

routes.post("/",
    productValidatiions.createNewProductValidations,
    productsController.createNewProduct);

routes.put("/:id",
    commonValidatiions.validateParams,
    productValidatiions.updateProductValidations,
    productsController.updateProduct);

routes.delete("/:id",
    commonValidatiions.validateParams,
    productsController.deleteProduct);

export default routes