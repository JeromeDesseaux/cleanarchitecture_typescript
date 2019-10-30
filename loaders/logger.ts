import winston from "winston";
const env = process.env.NODE_ENV;

const transports = [];
if (process.env.NODE_ENV !== "development") {
    transports.push(new winston.transports.Console());
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat(),
            ),
        }),
    );
}

const LoggerInstance = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
    ),
    level: env === "production" ? "warn" : "debug", // config.logs.level || 2,
    levels: winston.config.npm.levels,
    transports,
});

export default LoggerInstance;
