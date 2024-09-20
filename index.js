const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/new", messagesRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My second Express app - listening on port ${PORT}`),
);
