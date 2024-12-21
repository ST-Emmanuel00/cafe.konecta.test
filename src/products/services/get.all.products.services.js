import { db } from "../../common/config/index.js";

export const getAllProducts = async () => {
    try {

        const products = await db.product.findMany()

        return {
            message: 'Get all products jeje',
            data: {products}
        }

    } catch (error) {
        throw error
    }
};