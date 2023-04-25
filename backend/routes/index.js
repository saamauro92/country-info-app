const express = require("express");
const controllers = require("../controllers");
const route = express.Router();

route.get("/country/:country", controllers.getCountryData);

module.exports = route;
