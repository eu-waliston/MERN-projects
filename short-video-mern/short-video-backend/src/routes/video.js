const express = require('express');
const router = express.Router();

const Videos = require('../models/dbModel.js');

router.get('/', (req, res) => {
    res.status(200).send("Hello Node.JS")
})

router.post('/v2/posts', (req,res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

router.get('/v2/posts', (req,res) => {
    Videos.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});


module.exports = router;