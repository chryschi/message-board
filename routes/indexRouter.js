const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("This is the Homepage!"));
indexRouter.get("*", (req, res) => res.status(404).send("ERROR"));

module.exports = indexRouter;
