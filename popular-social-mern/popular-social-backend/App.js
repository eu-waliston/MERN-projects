const express = require("express");
const Cors = require("cors");

//Router
const root = require("./src/routes/index");

//App config
const app  = express();
const port = process.env.PORT || 9000;

//DB
require("./config/database");

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(Cors())


//Routes
app.use("/", root);

//Listener
app.listen(port, () => {
    console.log(`App listening at port ${port}🔥`);
})