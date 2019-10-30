import expressLoader from "./express";
import Logger from "./logger";
import mongooseLoader from "./mongoose";

export default async ({ app }) => {
    // const mongoConnection = await mongooseLoader();
    await mongooseLoader();
    Logger.info("✌️ Database loaded!");
    await expressLoader({ app });
    Logger.info("✌️ Server ready!");
};
