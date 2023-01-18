const express = require("express");
const mongoose = require("mongoose");
const Cards = require("./dbCards");

//App config
const app = express();
const port = process.env.PORT || 8001;

//Middleware

//DB Connection
require('./config/database');

//API Endpoints
app.get("/", (req, res) => {
  res.status(200).send(`App running at port ${port}`);
});

app.post("dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
        res.status(200).send(data)
    }
  });
});

//Lisnterner
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
