const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT ||  8080;

//basic bodyparser code that lets is send back json format
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connects html route 
require('./routes/api-routes')(app)
require('./routes/html-routes')(app);

//sets ups listener
app.listen(port, function () {
  console.log(`App is running on port  http://localhost:${port}`);
});
