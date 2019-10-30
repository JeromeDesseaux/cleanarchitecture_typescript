import mongoose from "mongoose";
import idValidator from "mongoose-id-validator";
import slug from "mongoose-slug-generator";

const Schema = mongoose.Schema;
mongoose.plugin(slug);

// Create a simple User's schema
// tslint:disable: object-literal-sort-keys
const sellSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 60,
        },
        slug: {
            type: String,
            slug: "title",
            unique: true,
        },
        description: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 1000,
        },
        // seller: { type: Schema.Types.ObjectId, ref: 'User' },
        type: { type: Schema.Types.ObjectId, ref: "SellType", required: true },
        ges: { type: Schema.Types.ObjectId, ref: "GESCategory", required: true },
        energy: { type: Schema.Types.ObjectId, ref: "EnergyCategory", required: true },
        active: {
            type: Boolean,
            default: true,
        },
        promotedUntil:  {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    },
);

sellSchema.plugin(idValidator);

export default mongoose.model("Sell", sellSchema);
