const express = require('express');
const router = express.Router();

const Posts = require("../modules/postModel");

router.get("/", (req,res) => {
    res.status(200).send("<h1>Olá Waliston<h1/>");
})

router.post("/upload", (req, res) => {
   const dbPost = req.body;

   Posts.create(dbPost, (err, data) => {
    if(err) res.status(500).send(err)
    else res.status(200).send(data)
   })
})

router.get("/sync", (req,res) =>{
    Posts.find((err,data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

module.exports = router;