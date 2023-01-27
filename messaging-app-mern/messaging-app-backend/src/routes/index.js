const Express = require('express');
const router = Express.Router();

const Messages = require('../models/dbMessage');

router.get('/', (req,res) => {
    res.status(200).send("<h1>OI</h1>")
})

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

module.exports = router;