const express = require("express");
const router = express.Router();

const { register, login } = require("../../controllers/user");
const { authenticate } = require("../../middlewares/userMiddlewares");

router.post("/register", register);

router.post("/login", login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/", authenticate, updateSubscriptionStatus);

module.exports = router;
