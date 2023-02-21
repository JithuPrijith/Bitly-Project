const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use("/api", routes);

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://urlshort:VX3EXahJPelxL5lv@cluster2.d4yv9rl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log(" db Connection failed");
  });

app.listen(3000, () => {
  console.log("server listening to port 3000");
});

