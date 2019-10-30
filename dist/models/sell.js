"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// Create a simple User's schema
const sellSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 60
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000
    }
}, {
    timestamps: true
});
exports.default = mongoose.model("Sell", sellSchema);
//# sourceMappingURL=sell.js.map