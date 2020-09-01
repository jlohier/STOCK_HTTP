const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DVAXSchema = new Schema({
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

const DVAX = mongoose.model('DVAX1', DVAXSchema)

module.exports = DVAX;