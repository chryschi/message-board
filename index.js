const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const messagesRouter = require("./routes/messagesRouter");

app.use("/new", messagesRouter);
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My second Express app - listening on port ${PORT}`),
);
