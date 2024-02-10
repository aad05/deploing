const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.get("/", (_, res) => {
  res.status(200).json({
    message: "success",
  });
});

app.listen(8080, async () => {
  await mongoose.connect(
    "mongodb+srv://asadbek-admin:12345678910@cluster0.df4z3jv.mongodb.net/building_2"
  );

  console.log("Connected to MongoDB and Listening on 8080");
});
