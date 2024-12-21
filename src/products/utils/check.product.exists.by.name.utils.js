import { db } from "../../common/config/index.js";
import { CustomError } from "../../common/utils/index.js";

export async function checkProductExistByName(name) {

    const products = await db.product.findFirst({
        where: {
            name,
        },
    });

    if (products) {
        throw new CustomError("Product already exists", 400);
    }
    
  }

