const mongoose = require("mongoose");

//PUSHER
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1544300",
  key: "f6fcde04f278d879b96b",
  secret: "ca4c91ce572d70f25785",
  cluster: "us2",
  useTLS: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("DB Connected");
  const msgCollection = db.collection("messagingmessages");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error trigerring Pusher");
    }
  });
});

const messagingSchema = mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  timestamp: { type: String, required: true },
  received: { type: Boolean, required: true },
});

module.exports = mongoose.model("messagingmessages", messagingSchema);
