export const getProductsToSale = async (req, res, next) => {
    try {
        res.status(200).json({ message: "Get all products to sale" });
    } catch (error) {
        next(error)
    }
};