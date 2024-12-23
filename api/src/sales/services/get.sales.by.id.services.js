import { db } from "../../common/config/index.js";

export const getSaleById = async (id) => {
    try {

        const sale = await db.sale.findFirst({
            where: {
                id,
            },
            include: {
                product: true,
            },
        })

        if (!sale) {
            throw new CustomError("Sale not found", 404);
        }

        return { message: "Get sale by id", data: { sale } };

    } catch (error) {
        throw error
    }
};