const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      reqired: [true, "Please add the username"],
    },
    email: {
      type: String,
      reqired: [true, "Please add the email"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      reqired: [true, "Please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
