const Contact = require("../../models/contactsModel");
const { httpError, contactValidator } = require("../../utils");

const addContact = async (req, res) => {
  const { error } = contactValidator.schema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }
  const data = await Contact.create(req.body);
  res.json(data);
};

module.exports = addContact;
