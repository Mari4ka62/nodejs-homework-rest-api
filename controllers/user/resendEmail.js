const User = require("../../models/userModel");
const { userValidator, httpError, sendEmail } = require("../../utils");

const resendEmail = async (req, res) => {
  const { error } = userValidator.emailSchema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const { email } = req.body;
  const user = User.findOne({ email });

  if (!user) {
    throw httpError(400, "missing required field email");
  }

  if (user.verify) {
    throw httpError(400, "Verification has already been passed");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/auth/verify/${user.verificationToken}">Click to verify your email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({ message: "Verification email sent" });
};
module.exports = resendEmail;
