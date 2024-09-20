const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => res.send("Here are the messages!"));

module.exports = messagesRouter;
