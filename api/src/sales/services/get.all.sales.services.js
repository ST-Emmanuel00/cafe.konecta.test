import { db } from "../../common/config/index.js";

export const getAllSales = async () => {
    try {

        const sales = await db.sale.findMany({
            include: {
                product: true,
            },
            orderBy: {
                soldAt: 'desc'
            },
            take: 5
        });

        const salesWithTotal = sales.map(sale => ({
            ...sale,
            total: sale.product.price * sale.quantity
        }));

        return { message: "Get all sales", data: { count: sales.length, sales: salesWithTotal } };
    } catch (error) {
        throw error
    }
};