const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    // .valid(...Object.values(subscriptionList))
    .required(),
});

module.exports = {
  registerSchema,
  updateSubscriptionSchema,
};
