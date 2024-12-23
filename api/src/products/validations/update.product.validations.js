import { body } from "express-validator";

export const updateProductValidations = [
    body('name')
        .optional()
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3, max: 255 }).withMessage('Name must be between 3 and 255 characters long'),
    body('reference')
        .optional()
        .isString().withMessage('Reference must be a string')
        .isLength({ max: 255 }).withMessage('Reference must be less than 255 characters long'),
    body('price')
        .optional()
        .isInt({ gt: 0 }).withMessage('Price must be an integer greater than 0'),
    body('weight')
        .optional()
        .isInt({ gt: 0 }).withMessage('Weight must be an integer greater than 0'),
    body('category')
        .optional()
        .isString().withMessage('Category must be a string')
        .isIn(['COFFEE', 'TEA', 'EQUIPMENT', 'PASTRY', 'SNACK']).withMessage('Category must be one of the following: COFFEE, TEA, EQUIPMENT, PASTRY, SNACK'),
    body('stock')
        .optional()
        .isInt({ gt: 1 }).withMessage('Stock must be an integer greater than 0'),
];


