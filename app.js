const express = require("express");
const bodyParser = require("./middleware/bodyParser");
const routes = require("./routes");
const port = 8080;

const app = express();

bodyParser(app);

app.use("/", routes);

app.listen(port, () => {
  console.log(`app listening in port ${port}`);
});
