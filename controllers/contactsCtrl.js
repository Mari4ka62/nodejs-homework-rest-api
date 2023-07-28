const { schema, updateFavouriteSchema } = require("../utils/contactValidator");

const Contact = require("../models/contactsModel");

const httpError = require("../utils/httpError");
const ctrlWrapper = require("../utils/ctrlWrapper");

const listContacts = async (req, res) => {
  const data = await Contact.find();
  res.json(data);
};
const getContactById = async (req, res) => {
  const data = await Contact.findById(req.params.contactId);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.json(data);
};
const addContact = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }
  const data = await Contact.create(req.body);
  res.json(data);
};

const removeContact = async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.contactId);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "contact deleted" });
};
const updateContact = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const data = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.json(data);
};
const updateStatusContact = async (req, res) => {
  const { error } = updateFavouriteSchema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const data = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.json(data);
};
module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
