const { Router } = require("express");
const dataController = require("../controllers/data.controller");

const router = Router();

router.post("/create", dataController.create);
router.get("/get/:id", dataController.getData);
router.post("/update/:id", dataController.updateData);
router.delete("/delete/:id", dataController.deleteData);

module.exports = router;
