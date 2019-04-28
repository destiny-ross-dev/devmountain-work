require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = 3010;
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

app.get("/api/houses", c.getListings);
app.post("/api/house", c.createListing);
app.delete("/api/house/:id", c.deleteListing);

app.listen(port, () => console.log(`Listening on port ${port}`));
