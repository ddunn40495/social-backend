const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { required: true, unique: true, type: String },
  password: { required: true, type: String },
  name: String,
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  board: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "board",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
