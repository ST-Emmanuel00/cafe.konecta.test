
export const errorHandler = (error, req, res, next) => {
    console.error("Error:", error.message, error.statusCode);

    // Check if the error is a custom error
    res.status(error.statusCode || 500).json({
        statusCode: error.statusCode || 500,
        timestamp: new Date().toISOString(),
        path: req.url,
        method: req.method,
        errorType: error.name || 'UnknownError',
        message: error.message,
    });

    next();
};