const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = {
    Quote: mongoose.model("Quote", quoteSchema)
};
