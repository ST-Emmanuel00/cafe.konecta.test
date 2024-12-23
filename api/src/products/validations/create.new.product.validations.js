import { body } from "express-validator";
import { errorCatcher } from "../../common/middlewares/index.js";

export const createNewProductValidations = [
  body('name')
    .isString().withMessage('Name must be a string')
    .notEmpty().withMessage('Name is required'),
  body('price')
    .isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0')
    .notEmpty().withMessage('Price is required'),
  body('weight')
    .isInt({ gt: 0 }).withMessage('Weight must be an integer greater than 0')
    .notEmpty().withMessage('Weight is required'),
  body('category')
    .isString().withMessage('Category must be a string')
    .notEmpty().withMessage('Category is required'),
  body('stock')
    .isInt({ gt: 1 }).withMessage('Stock must be an integer greater than 0')
    .notEmpty().withMessage('Stock is required'),
    errorCatcher
];

