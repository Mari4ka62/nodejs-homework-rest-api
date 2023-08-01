const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/userModel");
const { userValidator, httpError } = require("../../utils");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { error } = userValidator.registerSchema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw httpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw httpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({ token });
};
module.exports = login;
