import { Router } from "express";
import { commonRoutes } from "./common/routes/index.js";
import productsRoutes from "./products/products.routes.js";
import salesRoutes from "./sales/sales.routes.js";

const routes = Router();

routes.use("/health", commonRoutes);
routes.use("/products", productsRoutes);
routes.use("/sales", salesRoutes);

export default routes