const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_URL;
// =======================================
//              DATABASE
// =======================================
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Data Base Connected");
  })
  .catch((err) => {
    console.log("err");
  });

module.exports = {
  Item: require("./GroupSchema"),
  Order: require("./BoardSchema"),
  User: require("./UserSchema"),
};
