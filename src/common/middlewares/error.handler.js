import { validationResult } from "express-validator";

export const errorHandler = (error, req, res, next) => {
    console.error("Error:", error.message, error.statusCode);

    // Check if the error is a validation error
    const errors = validationResult(req)
        .formatWith(({ msg, type, value, path, location }) => {
            return {
                message: msg,
                errorType: "validation_error",
                value: value,
                path: path,
                location: location,
            };
        })
        .array();

    if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
    }

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