const express = require("express");
const app = express();
const bodyParser = require("./middleware/bodyParser");
const cors = require("cors");
bodyParser(app);
const routes = require("./routes");

app.use(cors());
app.use("/", routes);


module.exports = app;


