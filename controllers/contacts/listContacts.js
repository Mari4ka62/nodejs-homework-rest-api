const Contact = require("../../models/contactsModel");

const listContacts = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};

module.exports = listContacts;
