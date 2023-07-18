const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      reqired: [true, "Please add the name"],
    },
    email: {
      type: String,
      reqired: [true, "Please add the email"],
    },
    phone: {
      type: String,
      reqired: [true, "Please add the phone Number"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
