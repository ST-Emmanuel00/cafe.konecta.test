export const getAllProducts = async (req, res, next) => {
    try {
        res.status(200).json({ message: "Get all products" });
    } catch (error) {
        next(error)
    }
};

