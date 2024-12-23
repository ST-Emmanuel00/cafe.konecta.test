import { db } from "../../common/config/index.js";
import { checkProductExistById } from "../utils/index.js";

export const deleteProduct = async (id) => {
    try {

        await checkProductExistById(id);

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