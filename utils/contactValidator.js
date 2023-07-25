const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateFavouriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
module.exports = {
  schema,
  updateFavouriteSchema,
};
