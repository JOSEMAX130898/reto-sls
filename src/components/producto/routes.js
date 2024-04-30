const express = require("express");
const router = express.Router();
const Controller = require("./controller");
//const user_auth = require('../../middlewares/auth');

router.get("/", Controller.getProductos);
router.post('/', Controller.crudProduct);
module.exports = router;