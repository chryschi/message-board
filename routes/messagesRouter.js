const { Router } = require("express");
const messages = require("../messages");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => res.render("form"));
messagesRouter.post("/", (req, res) => {
  messages.push({ text: req.body.message, user: req.body.authorName });
  res.redirect("/");
});

module.exports = messagesRouter;
