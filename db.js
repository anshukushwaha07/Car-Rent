const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://AnshuKush007:xyz1111%40%40@carbike.jk9nb.mongodb.net/Vechical-rental",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
