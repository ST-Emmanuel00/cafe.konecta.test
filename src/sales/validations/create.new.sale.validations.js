import { body } from "express-validator";
import { errorCatcher } from "../../common/middlewares/index.js";

export const createNewSaleValidations = [
    body('productId')
        .isUUID().withMessage('Invalid UUID for productId')
        .notEmpty().withMessage('productId is required'),
    body('quantity')
        .isInt({ gt: 0 }).withMessage('Quantity must be an integer greater than 0')
        .notEmpty().withMessage('Quantity is required'),
    errorCatcher
];