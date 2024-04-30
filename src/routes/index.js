const express = require("express")
const router = express.Router();

const productoRouter = require("../components/producto/routes");
const swapiRouter = require("../components/swapi/router");

router.use("/swapi", swapiRouter);
router.use("/producto", productoRouter);
module.exports = router;
