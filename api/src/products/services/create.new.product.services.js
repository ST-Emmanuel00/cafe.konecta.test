import { db } from "../../common/config/index.js";
import { checkProductExistByName, generateUniqueReference } from "../utils/index.js";

export const createNewProduct = async (productData) => {
    try {
        const { name, price, weight, category, stock } = productData;

        // Check if product already exists
        
        await checkProductExistByName(name);

        // Create new product

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