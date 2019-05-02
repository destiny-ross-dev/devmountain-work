require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 3010;
const massive = require("massive");
const morgan = require("morgan");
const morganBody = require("morgan-body");
const session = require("express-session");
const authRoute = require(`${__dirname}/routes/authRoute`);
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
// app.use(morgan("combined"));
morganBody(app);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000 * 60 * 60 * 24 * 14
    }
  })
);
// app.use((req, res, next) => {
//   const { session } = req;
//   console.log(req.session);
//   if (!session.userid) {
//     session.user = { userid: "" };
//   }

//   next();
// });

// EXPRESS ROUTER
app.use("/api/auth", authRoute);

app.listen(port, () => console.log(`Listening on port ${port}`));
