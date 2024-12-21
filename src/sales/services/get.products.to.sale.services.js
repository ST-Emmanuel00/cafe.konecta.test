import { db } from "../../common/config/index.js";

export const getProductsToSale = async () => {
    try {

        return { message: "Get all products to sale" };
        

    } catch (error) {
        throw error
    }
};