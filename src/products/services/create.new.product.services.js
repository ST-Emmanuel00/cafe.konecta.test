import { db } from "../../common/config/index.js";
import { generateUniqueReference } from "../utils/index.js";
import { CustomError } from "../../common/utils/index.js";

export const createNewProduct = async (productData) => {
    try {
        const { name, price, weight, category, stock } = productData;

        // Check if product already exists
        const productExistsByName = await db.product.findFirst({
            where: {
                name,
            },
        });

        if (productExistsByName) {
            throw new CustomError("Product already exists", 400); 
        }

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