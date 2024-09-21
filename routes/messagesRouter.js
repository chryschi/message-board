const { Router } = require("express");
const messages = require("../messages");

const messagesRouter = Router();

const calculateNewId = () => {
  return messages.length === 0 ? 0 : messages[messages.length - 1].id + 1;
};

messagesRouter.get("/", (req, res) => res.render("form"));
messagesRouter.post("/", (req, res) => {
  const newId = calculateNewId();
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date(),
    id: newId,
  });
  console.log(`Posted message with id: ${newId}`);
  res.redirect("/");
});

module.exports = messagesRouter;
