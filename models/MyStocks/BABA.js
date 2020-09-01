const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BABASchema = new Schema({
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

const BABA = mongoose.model('BABA', BABASchema)

module.exports = BABA;