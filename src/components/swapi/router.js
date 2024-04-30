const express = require("express");
const controller = require("./controller");

const router = express.Router();

router.get("/personas", controller.getPeople);
router.get("/planetas", controller.getPlanets);
module.exports = router;
