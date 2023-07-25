const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required(),
  favorite: Joi.boolean(),
});
const updateFavouriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
module.exports = {
  schema,
  updateFavouriteSchema,
};
