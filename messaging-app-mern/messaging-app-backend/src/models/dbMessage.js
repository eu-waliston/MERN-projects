const mongoose = require("mongoose");

const messagingSchema = mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  timestamp: { type: String, required: true },
  received: { type: Boolean, required: true },
});

module.exports = mongoose.model("messagingmessages", messagingSchema);
