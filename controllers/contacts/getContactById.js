const Contact = require("../../models/contactsModel");
const { httpError } = require("../../utils");

const getContactById = async (req, res) => {
  const data = await Contact.findById(req.params.contactId);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.json(data);
};
module.exports = getContactById;
