const express = require("express");
const path = require("path");
const app = express();

app.use(
  express.static(path.join(__dirname, "build"), {
    cacheControl: true,
    maxAge: 60 * 60 * 24 //86400seconds (a day)
  })
);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port =
  process.env.PORT || (undefined === process.env.NODE_ENV ? 3000 : 8080);

app.listen(port, function() {
  console.log("App is running & listening on port => :" + port);
  console.log("Current NODE_ENV => " + process.env.NODE_ENV || "development");
});
