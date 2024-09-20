const { Router } = require("express");
const indexRouter = Router();
const messages = require("../messages");

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
indexRouter.get("*", (req, res) => res.status(404).send("ERROR"));

module.exports = indexRouter;
