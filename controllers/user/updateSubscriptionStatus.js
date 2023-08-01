const { userValidator } = require("../../utils");

const updateSubscriptionStatus = async (req, res) => {
  const { error } = userValidator.updateSubscriptionSchema.validate(req.body);

  if (error) {
    throw httpError(400);
  }

  const { _id } = req.user;

  const data = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  if (!data) {
    throw HttpError(404);
  }

  res.json({
    user: {
      email: data.email,
      subscription: data.subscription,
    },
  });
};

module.exports = updateSubscriptionStatus;
