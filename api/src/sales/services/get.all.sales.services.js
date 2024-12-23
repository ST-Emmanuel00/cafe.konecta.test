import { db } from "../../common/config/index.js";

export const getAllSales = async () => {
    try {

        const sales = await db.sale.findMany({
            include: {
                product: true,
            },
        });
        return { message: "Get all sales", data: { count: sales.length, sales } };
    } catch (error) {
        throw error
    }
};