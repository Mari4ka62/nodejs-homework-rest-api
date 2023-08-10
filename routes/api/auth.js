const express = require("express");
const router = express.Router();

const {
  register,
  login,
  current,
  logout,
  updateSubscriptionStatus,
  updateAvatar,
} = require("../../controllers/user");
const { authenticate } = require("../../middlewares/userMiddlewares");
const upload = require("../../middlewares/avatarUpload");

router.post("/register", register);

router.post("/login", login);

router.get("/current", authenticate, current);

router.post("/logout", authenticate, logout);

router.patch("/", authenticate, updateSubscriptionStatus);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
