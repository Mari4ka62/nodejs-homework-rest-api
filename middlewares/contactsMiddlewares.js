const { isValidObjectId } = require("mongoose");

const { ctrlWrapper, httpError } = require("../utils");

const checkContactId = ctrlWrapper((req, res, next) => {
  if (!isValidObjectId(req.params.contactId)) {
    next(httpError(400, `${req.params.contactId} is not valid id`));
  }
  next();
});
module.exports = checkContactId;
