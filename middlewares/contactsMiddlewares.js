const { isValidObjectId } = require("mongoose");

const wrapper = require("../utils/ctrlWrapper");
const httpError = require("../utils/httpError");

const checkContactId = wrapper((req, res, next) => {
  if (!isValidObjectId(req.params.contactId)) {
    next(httpError(400, `${req.params.contactId} is not valid id`));
  }
  next();
});
module.exports = checkContactId;
