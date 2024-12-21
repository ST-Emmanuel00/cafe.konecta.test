import { Router } from "express";
import * as  productsController from "./products.controller.js";
import * as  productValidatiions from "./validations/index.js";

const routes = Router();

routes.get("/", productsController.getAllProducts);
routes.post("/", productValidatiions.createNewProductValidations, productsController.createNewProduct);
routes.put("/:id", productsController.updateProduct);
routes.delete("/:id", productsController.deleteProduct);

export default routes