import { db } from "../../common/config/index.js";
import { CustomError } from "../../common/utils/index.js";

export const updateProduct = async (id, newProductData) => {
    try {

        // Check if product exists

        const product = await db.product.findFirst({
            where: {
                id
            }
        });

        if (!product) {
            throw new CustomError("Product not found", 404);
        }

        // Update product

        const { name, price, weight, stock } = newProductData;

        const productUpdated = await db.product.update({
            where: {
                id
            },
            data: {

                name,
                price,
                weight,
                stock
            }
        });

        return {
            message: 'Update product jeje',
            data: { product: productUpdated }
        }

    } catch (error) {
        throw error
    }
};