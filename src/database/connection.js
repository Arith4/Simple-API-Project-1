// Importing Mongoose Module
const mongoose = require("mongoose");

// Connecting to Database : 
mongoose.connect("mongodb://localhost:27017/fastest-cars").then(() => {
    console.log(`Connection to Database Successfull`);
}).catch(() => {
    console.log(`Connection to Database Unsuccessfull`);
})

