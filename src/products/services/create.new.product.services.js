import { db } from "../../common/config/index.js";
import { generateUniqueReference } from "../utils/index.js";

export const createNewProduct = async (productData) => {
    try {
        const { name, price, weight, category, stock } = productData;
        const newProduct = await db.product.create({
            data: {
                name,
                reference: generateUniqueReference(name),
                price,
                weight,
                category,
                stock,
            },
        });
        return {
            message: 'New Product created',
            data: { product: newProduct },
        };
    } catch (error) {
        throw error;
    }
};