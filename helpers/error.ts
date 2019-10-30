import Logger from "../loaders/logger";

export class ErrorHandler extends Error {
    public statusCode: number;
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

export const errorMiddleware = (err, req, res, next) => {
    // Logger.error(JSON.stringify(err));
    if (err.joi) { err.message = err.joi.details[0] ? err.joi.details[0].message : err.message; }
    if (!err.statusCode) { err.statusCode = 500; }
    const error = new ErrorHandler(err.statusCode, err.message);
    res.status(error.statusCode).json(error);
};
