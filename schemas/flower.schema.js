const { Schema, default: mongoose } = require("mongoose");

const flowerSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["gardening", "domestic", "homepot"],
  },
});

module.exports = {
  gardening: mongoose.model("gardening", flowerSchema),
  domestic: mongoose.model("domestic", flowerSchema),
  homepot: mongoose.model("homepot", flowerSchema),
};
