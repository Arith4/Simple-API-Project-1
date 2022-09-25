const mongoose = require("mongoose");

// Defining the Car Schema : 
const Cars = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Rank : {
        type : Number,
        required : true
    },
    Speed : {
        type : Number,
        required : true
    }
});

// Creating a Collection : 
const carModel = mongoose.model("CarModel",Cars);

// Exporting the Model : 
module.exports = carModel;
