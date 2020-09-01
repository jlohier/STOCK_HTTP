const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const stockRouter = require("./mystocks");
app.use("/stock", stockRouter);

app.listen(port, () => {
  console.log("server running on port");
});
