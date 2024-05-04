const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
// const productroutes = require("./routes/products");
const app = express();
// const cors = require("cors");
// app.use(cors());
app.use(express.json());
// app.use("/product", productroutes);
app.listen(process.env.PORT, () => {
  console.log("server is runnig");
});
mongoose
  .connect(process.env.URL)
  .then(() => console.log("connected with database"))
  .catch(() => console.log("connection failed"));
