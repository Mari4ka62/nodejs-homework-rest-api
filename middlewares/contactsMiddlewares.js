const { Types } = require("mongoose");

// const validationSchema = require("../utils/contactValidator");
const wrapper = require("../utils/ctrlWrapper");
const httpError = require("../utils/httpError");

const checkContactId = wrapper(async (req, res, next) => {
  const { id } = req.params;

  const idIsValid = Types.ObjectId.isValid(id);

  if (!idIsValid) throw new httpError(404, "User does not exist..");

  next();
});
module.exports = checkContactId;
