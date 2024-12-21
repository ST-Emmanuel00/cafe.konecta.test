import { db } from "../../common/config/index.js";

export const getProductsToSale = async () => {
    try {

        const products = await db.product.findMany({
            where: {
                stock: {
                    gt: 0
                }
            }
        });

        return { message: "Get all products to sale" , data: { count: products.length, products } };
        

    } catch (error) {
        throw error
    }
};