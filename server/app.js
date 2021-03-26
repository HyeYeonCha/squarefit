require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const router = require("./routes");
const connect = require("./models");

const app = express();
connect();

app.set("port", process.env.PORT || 5000);

if (process.env.NODE_ENV === "production") {
  app.use(logger("combined"));
} else {
  app.use(logger("dev"));
}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).end());
app.use("/api", router);

app.listen(app.get("port"));
