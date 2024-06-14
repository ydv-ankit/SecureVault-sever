const { Router } = require("express");

const userController = require("../controllers/user.controller");

const router = Router();

router.post("/create", userController.create);
router.post("/get", userController.findUser);

module.exports = router;
