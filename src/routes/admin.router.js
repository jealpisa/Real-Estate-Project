const router = require("express").Router();
const { authUser, authAdmin } = require("../utils");

router.post("/category", authUser, authAdmin, postCategory);
router.delete("/category/:categoryId", authUser, authAdmin, deleteCategory);

module.exports = router; 