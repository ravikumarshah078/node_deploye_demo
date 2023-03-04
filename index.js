const express = require("express");
const test = require("./routes/test");
const index = require("./routes/index");

const app = express();

app.use("/", index);
app.use("/get", test);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});