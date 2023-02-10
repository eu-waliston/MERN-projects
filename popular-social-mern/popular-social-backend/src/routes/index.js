const express = require("express");
const router = express.Router();

const Posts = require('../modules/postModel')

router.get("/", (req, res) => {
    res.status(200).send("<h1>OI🔥<h1/>");
})

router.post("/upload/post", (req,res) => {
    const dbPost = req.body;
    Posts.create(dbPost, (err,data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

router.get("/posts", (req,res) => {
    Posts.find((err, data) =>{
        if(err) res.status(500).send(err)
        else {
            data.sort((b,a) => a.timestamp - b.timestamp)
            res.status(200).send(data)
        }
    })
    res.status(200).send(req.body)
})

module.exports = router;