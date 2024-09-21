const { Router } = require("express");
const messagesRouter = Router();

const messageController = require("../controller/messageController");

messagesRouter.get("/", (req, res) => res.render("form"));
messagesRouter.post("/", messageController.createMessage);

module.exports = messagesRouter;
