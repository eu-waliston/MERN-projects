const Express = require('express');
const app = Express();
const Cors = require('cors')

const rootRouter = require('./src/routes/index.js');

const port = process.env.PORT || 9000

require("./config/database");

app.use(Express.json());
app.use(Express.urlencoded({extended: true}));
app.use(Cors())

app.use("/", rootRouter)

app.listen(port, () => {
    console.log(`App running at port ${port}`);
})