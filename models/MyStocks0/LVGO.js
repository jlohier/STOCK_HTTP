const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const LVGOSchema = new Schema({
    date:
    {
        type: Date,
        required: true,
    },
    open:
    {
        type: Number,
        required: true,
    },

    type:
    {
        type: String,
        required: true,
    }


},
    {
        timestamps: true,
    }
);

const LVGO = mongoose.model('LVGO0', LVGOSchema)

module.exports = LVGO;