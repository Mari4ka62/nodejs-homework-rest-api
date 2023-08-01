const Contact = require("../../models/contactsModel");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 20, favorite = false } = req.query;
  const skip = (page - 1) * limit;
  const filter = favorite ? { owner, favorite } : { owner };
  const data = await Contact.find(filter, "", { skip, limit }).populate(
    "owner",
    "subscription email"
  );
  res.json(data);
};

module.exports = listContacts;
