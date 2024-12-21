import { Router } from "express";
import { health } from "../controller/index.js";

const routes = Router();

routes.get("/", health);

export default routes