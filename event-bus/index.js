const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event); // posts sever
  axios.post("http://localhost:4001/events", event); // comments server
  axios.post("http://localhost:4002/events", event); // query server
  axios.post("http://localhost:4003/events", event); // moderation server

  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log("listening on 4005");
});
