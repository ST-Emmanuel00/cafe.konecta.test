import * as salesUseCase from './services/index.js';

export const getProductsToSale = async (req, res, next) => {
    try {
        res.status(200).json(await salesUseCase.getProductsToSale());
    } catch (error) {
        next(error)
    }
};

export const getAllSales = async (req, res, next) => {
    try {
        res.status(200).json(await salesUseCase.getAllSales());
    } catch (error) {
        next(error)
    }
}

export const getSaleById = async (req, res, next) => {  
    try {
        res.status(200).json( await salesUseCase.getSaleById());
    } catch (error) {
        next(error)
    }
}

export const createNewSale = async (req, res, next) => {
    try {
        const saleData = req.body;
        res.status(200).json(await salesUseCase.createNewSale(saleData));
    } catch (error) {
        next(error)
    }
};