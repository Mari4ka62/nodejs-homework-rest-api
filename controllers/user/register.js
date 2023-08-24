const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const User = require("../../models/userModel");
const { userValidator, httpError, sendEmail } = require("../../utils");

require("dotenv").config();

const { BASE_URL } = process.env;

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

  const avatarURL = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/auth/verify/${verificationToken}">Click to verify your email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

module.exports = register;
