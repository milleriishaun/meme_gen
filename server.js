const cors = require("cors");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const fetch = require("node-fetch");

// app.set("port", process.env.PORT || 3001);
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3001);

const app = express();

app.disable("x-powered-by");
app.use(cors());
app.use(compression());
app.use(morgan("common"));

console.log(`working...`);

// Node/Express we'd like it to serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    // Send any other requests to the index.html page
    console.log(`hit Herokuproxy(${PORT}) or express proxy(port3001)`);
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.get("/api", (req, res) => {
  const URL = `https://api.imgflip.com/get_memes`;
  fetch(URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log("the data: ", data);
      res.send(JSON.stringify(data));
    })
    .catch(function(e) {
      console.log("error catch block response fetch: ", e);
    });
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server started and listening on ${PORT}`);
});
