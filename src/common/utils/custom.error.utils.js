/*
    CustomError class is used to create custom error objects with a status code.
    This class extends the Error class and adds a status code property to the error object.
    
    example:
    throw new CustomError("Product already exists", 400);
*/

export class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}