import express from "express";
import config from "./config/config";

async function startServer() {
  const app = express();
  await require("./loaders").default({ app });

  app.listen(config.port, () => {
    console.log(`Welcome on board! Listening on port ${config.port}!`);
  });
}

startServer();
