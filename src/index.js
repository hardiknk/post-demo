const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("./db/connect");
require("../src/routes/routes")(app);
const port = process.env.PORT || 5002;
app.use(bodyParser.json());
app.listen(port);