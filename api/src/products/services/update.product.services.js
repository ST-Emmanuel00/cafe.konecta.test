import { db } from "../../common/config/index.js";
import { checkProductExistById } from "../utils/index.js";

export const updateProduct = async (id, newProductData) => {
    try {

        // Check if product exists

        await checkProductExistById(id);

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