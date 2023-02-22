const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://urlshort:VX3EXahJPelxL5lv@cluster2.d4yv9rl.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log(" db Connection failed");
  });

app.use("/api", routes);

app.listen(3000, () => {
  console.log("server listening to port 3000");
});
