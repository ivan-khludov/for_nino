/**
 * Required External Modules
 */

const express = require("express");
const reload = require("reload");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */

app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

app.get("/", (req, res) => {
  res.redirect("/1");
});

app.get(/\/[0-9]+/, (req, res) => {
  if (req.originalUrl === "/") {
    return res.redirect("/1");
  }
  res.render("index", { id: req.originalUrl });
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

reload(app);
