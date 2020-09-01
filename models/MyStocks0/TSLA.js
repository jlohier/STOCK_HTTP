const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const TSLASchema = new Schema({
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

const TSLA = mongoose.model('TSLA0', TSLASchema)

module.exports = TSLA;