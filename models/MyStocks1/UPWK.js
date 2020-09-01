const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UPWKSchema = new Schema({
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

const UPWK = mongoose.model('UPWK1', UPWKSchema)

module.exports = UPWK ; 