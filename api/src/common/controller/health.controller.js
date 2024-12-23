export const health = async (req, res, next) => {
    try {
        res.status(200).json({ message: "Server is healthy" });
    } catch (error) {
        next(error)
    }
};