import { Router } from "express";
import sell from "./routes/sell";

// guaranteed to get dependencies
export default () => {
    const app = Router();
    // app.use("/sells", sell(app));
    sell(app);
    return app;
};
