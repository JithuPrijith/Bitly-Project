const mongoose = require("mongoose")
const dataSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    time : { 
        type : Date,
         default: Date.now
    }

})
module.exports = mongoose.model("Data",dataSchema);