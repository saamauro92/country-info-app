const express = require("express");

const bodyParser = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = bodyParser;
