const express = require("express");
const router = express.Router();

const Card = require("../models/dbCards");

router.get("/", (req, res) => {
  res.status(200).send("<h1>Olá NodeJS</h1>");
});

router.post("/dating/cards",  (req, res) => {
  const newCard = req.body
  Card.create(newCard, (err,data) => {
    if(err) res.status(500).send(err)
    else  res.status(201).send(data)
  })
});

router.get("/dating/cards", (req, res) => {
  Card.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

module.exports = router;