const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("./db/connect");
const postRoute = require("../src/routes/postRoute");

const port = process.env.PORT || 5002;

app.use(bodyParser.json());

app.use('/post', postRoute);

app.listen(port);