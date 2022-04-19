const router = require("express").Router();

const { signup, login, me } = require("../controllers/auth.controller");

const { checkUser } = require("../utils/index")

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", checkUser, me)

module.exports = router;