console.log("my node in express");
const express = require("express");
const dotenv = require("dotenv").config();
const ErrorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
app.use(ErrorHandler);

app.listen(port, () => {
  console.log(port);
});
