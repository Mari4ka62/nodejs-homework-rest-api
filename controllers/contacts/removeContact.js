const Contact = require("../../models/contactsModel");
const { httpError } = require("../../utils");

const removeContact = async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.contactId);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "contact deleted" });
};
module.exports = removeContact;
