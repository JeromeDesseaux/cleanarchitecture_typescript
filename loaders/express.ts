import bodyParser from "body-parser";
import { errors } from "celebrate";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import routes from "../api";
import { errorMiddleware } from "../helpers/error";

export default async ({ app }) => {
    /* MIDDLEWARES */
    app.use(morgan("dev"));
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    const upload = multer();
    app.use(upload.none());

    /* ROUTES */
    app.use("/api", routes());
    app.get("/status", (req, res) => {
        res.json({ status: "running", code: 200, date: Date.now() })
            .status(200)
            .end();
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });
    app.enable("trust proxy");

    // app.use(errors());
    app.use(errorMiddleware);
    // Return the express app
    return app;
};
