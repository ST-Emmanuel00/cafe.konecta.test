import { db } from "../../common/config/index.js";

export const createNewSale = async () => {
    try {

        return { message: 'Sale created successfully' };

    } catch (error) {
        throw error
    }
};