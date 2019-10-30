"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
var cors = require("cors");
const morgan = require("morgan");
exports.default = ({ app }) => __awaiter(void 0, void 0, void 0, function* () {
    /** MIDDLEWARES **/
    app.use(morgan("dev"));
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    /** ROUTES **/
    app.get("/status", (req, res) => {
        res.json({ status: "running", code: 200, date: Date.now() })
            .status(200)
            .end();
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });
    app.enable("trust proxy");
    // Return the express app
    return app;
});
//# sourceMappingURL=express.js.map