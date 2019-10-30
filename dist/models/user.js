"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// Create a simple User's schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});
exports.default = mongoose.model("User", userSchema);
//# sourceMappingURL=user.js.map