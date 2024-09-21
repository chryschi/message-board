const { Router } = require("express");
const indexRouter = Router();
const messages = require("../messages");
const messageController = require("../controller/messageController");

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
indexRouter.get("/:messageId", messageController.getMessageById);
indexRouter.get("*", (req, res) => res.status(404).send("ERROR"));

module.exports = indexRouter;
