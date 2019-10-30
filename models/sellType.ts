import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug);

// Create a simple User's schema
// tslint:disable: object-literal-sort-keys
const sellTypeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            slug: "title",
            unique: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model("SellType", sellTypeSchema);
