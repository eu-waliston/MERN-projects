const uri = "mongodb+srv://root:root@cluster0.zsbjrbt.mongodb.net/?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSElectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise;

const connectionWithDB = () => {
    mongoose.connect(uri, options, (err, db) => {
        if(err) console.log(err);
        else console.log("Conectado ao MongoDB :)");
    })
}

connectionWithDB();