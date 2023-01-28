const Express = require('express');
const router = Express.Router();

const Messages = require('../models/dbMessage');
const { findById } = require('../models/user');
const User = require('../models/user');

//CHAT MESSAGES

router.post('/messages/new', (req,res) => {
    const dbMessage = req.body;
    Messages.create(dbMessage, (err, data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

router.get('/messages/sync', (req,res) => {
    Messages.find((err, data) => {
        if(err) res.status(420).send(err)
        else res.status(200).send(data)
    })
})

//NEW USER

router.get("/:id", async (req,res) => {
    try {
        let userInfo = await User.findById(req.params.id)
        res.status(200).send(userInfo)
    } catch (error) {
        
    }
} )

router.post('/user/new', (req, res) => {
    const userCad = req.body;
    User.create(userCad, (err, data) => {
        if(err) res.status(500).send(err)
        else res.status(200).send(data)
    })
})

module.exports = router;