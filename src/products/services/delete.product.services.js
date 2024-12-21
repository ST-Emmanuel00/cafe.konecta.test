import { db } from "../../common/config/index.js";

export const deleteProduct = async () => {
    try {

        const products = await db.product.findMany()

        return {
            message: 'delete product jeje',
        }

    } catch (error) {
        throw error
    }
};