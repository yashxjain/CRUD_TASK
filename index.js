const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// require("dotenv").config()

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/CRUD")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", require("./routes/auth"));
app.listen(5000, () => console.log("Server is running on :5000"));
