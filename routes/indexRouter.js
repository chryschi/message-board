const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index"));
indexRouter.get("*", (req, res) => res.status(404).send("ERROR"));

module.exports = indexRouter;
