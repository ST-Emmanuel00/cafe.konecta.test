import * as productUseCases from './services/index.js';

export const getAllProducts = async (req, res, next) => {
    try {
        res.status(200).json(await productUseCases.getAllProducts());
    } catch (error) {
        next(error)
    }
};

