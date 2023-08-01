const Contact = require("../../models/contactsModel");
const { httpError, contactValidator } = require("../../utils");

const updateStatusContact = async (req, res) => {
  const { error } = contactValidator.updateFavouriteSchema.validate(req.body);

  if (error) {
    throw httpError(400);
  }

  const data = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });

  if (!data) {
    throw httpError(404);
  }

  res.json(data);
};
module.exports = updateStatusContact;
