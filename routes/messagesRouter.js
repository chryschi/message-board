const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => res.render("form"));
messagesRouter.post("/", (req, res) => console.log("Message was posted!"));

module.exports = messagesRouter;
