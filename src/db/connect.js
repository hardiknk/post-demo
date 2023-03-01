const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/Post").then(() => {
    console.log("connected successfully");
}).catch((err) => {
    console.log(err);
});