const bcrypt = require("bcrypt");

const User = require("../../models/userModel");
const { userValidator, httpError } = require("../../utils");

const register = async (req, res) => {
  const { error } = userValidator.registerSchema.validate(req.body);
  if (error) {
    throw httpError(400, error.message);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw httpError(409, "Email in use");
  }

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
