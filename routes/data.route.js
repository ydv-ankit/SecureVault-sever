const { Router } = require("express");
const dataController = require("../controllers/data.controller");

const router = Router();

router.post("/create", dataController.create);
router.get("/user/:id", dataController.getData);
router.post("/update/:id", dataController.updateData);
router.delete("/delete/:id", dataController.deleteData);
router.get("/get/:id", dataController.getDataById);

module.exports = router;
