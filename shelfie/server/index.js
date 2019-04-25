require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3005;

const app = express();

app.use(json());
app.use(cors());

app.listen(port, () => console.log(`Listening on port ${port}`));
