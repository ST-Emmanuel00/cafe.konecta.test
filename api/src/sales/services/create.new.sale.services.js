import { db } from "../../common/config/index.js";
import { CustomError } from "../../common/utils/index.js";

export const createNewSale = async (newSaleData) => {
    try {

        const { productId, quantity } = newSaleData;

        // Check if product exists

        const product = await db.product.findFirst({
            where: {
                id: productId,
            },
        });

        if (!product) {
            throw new CustomError("Product not found", 404);
        }

        // Check if there is enough stock

        if (product.stock < quantity) {
            throw new CustomError("Not enough stock", 400);
        }

        // Create sale

        const sale = await db.sale.create({
            data: {
                productId,
                quantity,
            }
        });

        // Update stock

        const productUpdated = await db.product.update({
            where: {
                id: productId,
            },
            data: {
                stock: product.stock - quantity,
            }
        });


        return {
            message: 'Sale created successfully',
            data: {
                sale,
                product: {
                    newStock: productUpdated.stock,
                    beforeStock: product.stock
                }
            }
        };

    } catch (error) {
        throw error
    }
};