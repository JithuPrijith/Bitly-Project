const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const app = express();


app.use("/api",routes)


app.listen(3000, () => {
    console.log("server listening to port 3000");
})