const Joi = require("joi");

const subscriptionList = {
  STARTER: "starter",
  PRO: "pro",
  BUSINESS: "business",
};

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...Object.values(subscriptionList))
    .required(),
});
const emailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  registerSchema,
  updateSubscriptionSchema,
  emailSchema,
};
