import { Db } from "mongodb";
import mongoose from "mongoose";
import config from "../config/config";

export default async (): Promise<Db> => {
    const mongooseUrl = `mongodb://${config.database.host}:${config.database.port}/${config.database.database}`;
    const connection = await mongoose.connect(mongooseUrl, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return connection.connection.db;
};
