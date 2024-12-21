import { db } from "../../common/config/index.js";

export const getSaleById = async () => {
    try {

        return { message: "Get sale by id" };

    } catch (error) {
        throw error
    }
};