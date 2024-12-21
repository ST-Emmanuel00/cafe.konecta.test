import { param } from "express-validator";
import { errorCatcher } from "../middlewares/index.js";

export const validateParams = [
    param('id').isUUID().withMessage('Invalid UUID')
    .notEmpty().withMessage('Id is required'),

    errorCatcher
];


