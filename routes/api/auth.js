const express = require("express");
const router = express.Router();

const {
  register,
  login,
  current,
  logout,
  updateSubscriptionStatus,
} = require("../../controllers/user");
const { authenticate } = require("../../middlewares/userMiddlewares");

router.post("/register", register);

router.post("/login", login);

router.get("/current", authenticate, current);

router.post("/logout", authenticate, logout);

router.patch("/", authenticate, updateSubscriptionStatus);

module.exports = router;
