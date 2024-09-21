const messages = require("../messages");

const getMessageById = async (req, res) => {
  const messageId = req.params.messageId;

  const message = messages.find((message) => message.id == messageId);

  if (!message) {
    res.status(404).send("Message not found");
    console.log(message);
    return;
  }

  res.send(
    `Message found: ${message.text} by ${message.user}, posted on ${message.added}`,
  );
};

module.exports = { getMessageById };
