const express = require("express");
const Cors = require("cors");
const { urlencoded } = require("express");

const rooRouter = require('./src/routes/card');

//App config
const app = express();
const port = process.env.PORT || 8001;

//Middleware
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(Cors());

//DB Connection
require('./config/database');

//API Endpoints
app.use('/', rooRouter);


//Lisnterner
app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
