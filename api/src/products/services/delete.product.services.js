import { db } from "../../common/config/index.js";
import { CustomError } from "../../common/utils/custom.error.utils.js";
import { checkProductExistById } from "../utils/index.js";

export const deleteProduct = async (id) => {
    try {

        const products = await db.product.findFirst({
            where: {
                id,
            },
            include: {
                sales: true
            }
        });

        if (!products) {
            throw new CustomError("Product not found", 404);
        }

        if (products.sales.length > 0) {
            throw new CustomError("Product has sales, can't be deleted", 400);
        }


        const productDeleted = await db.product.delete({
            where: {
                id
            }
        });

        return {
            message: "Product deleted",
            data: { product: productDeleted }
        }

    } catch (error) {
        throw error
    }
};