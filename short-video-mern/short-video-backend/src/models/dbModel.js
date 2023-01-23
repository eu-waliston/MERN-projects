const mongoose = require("mongoose");

const shortVideoSchema = mongoose.Schema({
  url: { type: String, required: true },
  channel: { type: String, required: true },
  description: { type: String, required: true },
  song: { type: String, required: true },
  likes: { type: String, required: true },
  shares: { type: String, required: true },
  messages: { type: String, required: true },
});

module.exports = mongoose.model('shortVideos', shortVideoSchema);

