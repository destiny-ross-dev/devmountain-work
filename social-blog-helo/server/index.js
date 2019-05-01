require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3010;
const massive = require("massive");
const morgan = require("morgan");
const c = require("./controller");

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(`Error connecting to database, ${err}`));

// MIDDLEWARE
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.
// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(json());
// Enables cross-origin resource sharing by sending default option header to browser.
app.use(cors());
// Logger for requests
app.use(morgan("combined"));

app.listen(port, () => console.log(`Listening on port ${port}`));
