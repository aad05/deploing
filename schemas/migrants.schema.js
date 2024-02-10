const { Schema, default: mongoose } = require("mongoose");

const migrantSchema = new Schema({
  name: String,
  surname: String,
  visa_expiration: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => {
        console.log(value);

        return value % 2;
      },
      //   message: (value) => `Given ${value} is not accaptable!`,
      message: ({ value }) => {
        console.log(value);

        return `Given ${value} is not accaptable!`;
      },
    },
  },
});

migrantSchema.methods.fullName = function () {
  return `${this.name} ${this.surname}`;
};

migrantSchema.statics.findHusan = function () {
  return this.find({ name: "Husan" });
};

module.exports = mongoose.model("migrants", migrantSchema);
