"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const config = require("./dev.json");
const config = __importStar(require("./dev.json"));
class ConfigurationManager {
    constructor() {
        this.config = config;
        this.environment = process.env.NODE_ENV || "development";
    }
}
exports.ConfigurationManager = ConfigurationManager;
//# sourceMappingURL=config.js.map