const { ctrlWrapper } = require("../../utils");

const register = require("./register");
const login = require("./login");
const current = require("./current");
const logout = require("./logout");
const updateSubscriptionStatus = require("./updateSubscriptionStatus");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  updateSubscriptionStatus: ctrlWrapper(updateSubscriptionStatus),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendEmail: ctrlWrapper(resendEmail),
};
