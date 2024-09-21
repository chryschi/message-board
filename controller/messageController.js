const messages = require("../messages");

const getMessageById = async (req, res) => {
  const messageId = req.params.messageId;

  const message = messages.find((message) => message.id == messageId);

  if (!message) {
    res.status(404).send("Message not found");
    console.log(message);
    return;
  }

  res.render("messageDetails", { message: message });
};

const getMessages = async (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const createMessage = async (req, res) => {
  const newId = calculateNewId();
  messages.push({
    text: req.body.message,
    user: req.body.authorName,
    added: new Date(),
    id: newId,
  });
  res.redirect("/");
};

const calculateNewId = () => {
  return messages.length === 0 ? 0 : messages[messages.length - 1].id + 1;
};

module.exports = { getMessageById, createMessage, getMessages };
