import { Router } from "express";
import * as  productsController from "./products.controller.js";

const routes = Router();

routes.get("/", productsController.getAllProducts);
routes.post("/", productsController.createNewProduct);
routes.put("/:id", productsController.updateProduct);
routes.delete("/:id", productsController.deleteProduct);

export default routes