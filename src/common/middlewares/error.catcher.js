import { validationResult } from "express-validator";

export const errorCatcher = (req, res, next) => {
    const errors = validationResult(req)
        .formatWith(({ msg, type, value, path, location }) => {
            return {
                message: msg,
                type: type,
                value: value,
                path: path,
                location: location,
            };
        })
        .array();

    if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
    }

    next();
};