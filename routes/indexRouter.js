const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    text: "Hi and welcome!",
    user: "Tom",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Dominique",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);
indexRouter.get("*", (req, res) => res.status(404).send("ERROR"));

module.exports = indexRouter;
