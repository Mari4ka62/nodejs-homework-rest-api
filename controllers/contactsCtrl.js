const Joi = require("joi");

const contacts = require("../models/contacts");

const httpError = require("../utils/httpError");
const ctrlWrapper = require("../utils/ctrlWrapper");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
});

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
  console.log(result);
};

const getContactById = async (req, res) => {
  const result = await contacts.getContactById(req.params.contactId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

const addContact = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "contact is deleted" });
};

const updateContact = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    throw httpError(400, error.message);
  }

  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
};
