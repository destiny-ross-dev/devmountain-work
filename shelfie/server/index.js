require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3005;
const massive = require("massive");
const c = require("./controller");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(`Error connecting to database, ${err}`));

app.use(json());
app.use(cors());

app.get(`/api/inventory`, c.getInventory);

app.listen(port, () => console.log(`Listening on port ${port}`));
