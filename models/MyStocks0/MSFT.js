const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const MSFTSchema = new Schema({
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

const MSFT = mongoose.model('MSFT0', MSFTSchema)

module.exports = MSFT;