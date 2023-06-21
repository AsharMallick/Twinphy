const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017", {
      dbName: "Twinphy",
    })
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
