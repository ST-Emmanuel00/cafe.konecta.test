import { db } from "../../common/config/index.js";
import { CustomError } from "../../common/utils/index.js";

export async function checkProductExistById(id) {

    const products = await db.product.findFirst({
        where: {
            id,
        },
    });

    if (!products) {
        throw new CustomError("Product not found", 404);
    }
    
  }

