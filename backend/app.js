const express = require("express");
const app = express();
const bodyParser = require("./middleware/bodyParser");
bodyParser(app);
const routes = require("./routes");


app.use("/", routes);


module.exports = app;


