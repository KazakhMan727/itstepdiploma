const express = require("express");
const formidable = require("express-formidable");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRouter = require("./routers/usersRouter");
const adtsRouter = require("./routers/adtsRouter");

const app = express();

app.use(express.json());
app.use(formidable());
app.use(cors());
app.use("/users", usersRouter);
app.use("/adts", adtsRouter);

const CONNECTION_STRING = "mongodb+srv://16bytes:bits32@cluster0.w6sus.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_STRING, (err) => {
    if (err) console.log(err);
    app.listen(8080);
    console.log("server is running");
});