const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controller/messageController");

indexRouter.get("/", messageController.getMessages);
indexRouter.get("/:messageId", messageController.getMessageById);
indexRouter.get("*", (req, res) => res.status(404).send("ERROR"));

module.exports = indexRouter;
