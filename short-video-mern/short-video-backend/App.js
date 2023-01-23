const express = require('express');
const Cors = require('cors')

const rootRouter = require('./src/routes/video');

//App Config
const app = express();
const port = process.env.PORT || 9000

//Midlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(Cors())

//Db Config
require('./config/database');


//API /Endpoints
app.use('/', rootRouter);


//Listener
app.listen(port, () => {
    console.log(`App Listen at port ${port}`);
})