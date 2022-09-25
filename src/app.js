const express = require("express");
const app = express();
require("./database/connection");
const router = require("./routes/router");
const port = process.env.PORT || 3000;

// To Understand JSON Format : 
app.use(express.json());

// Registering the Router : 
app.use(router);

app.listen(port,() => {
    console.log(`Listening to port ${port}`);
});
