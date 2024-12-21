import * as productUseCases from './services/index.js';

export const getAllProducts = async (req, res, next) => {
    try {
        res.status(200).json(await productUseCases.getAllProducts());
    } catch (error) {
        next(error)
    }
};

export const createNewProduct = async (req, res, next) => {
    try {
        const productData = req.body;
        res.status(200).json(await productUseCases.createNewProduct(productData));
    } catch (error) {
        next(error)
    }
};

export const updateProduct = async (req, res, next) => {
    try {
        res.status(200).json(await productUseCases.updateProduct());
    } catch (error) {
        next(error)
    }
}
export const deleteProduct = async (req, res, next) => {
    try {
        res.status(200).json(await productUseCases.deleteProduct());
    } catch (error) {
        next(error)
    }
}



