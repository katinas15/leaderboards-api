require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_MAIN;

if (uri) {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`*    DB: connected`);
    });
}
