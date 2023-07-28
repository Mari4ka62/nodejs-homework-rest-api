const express = require("express");
const router = express.Router();

const checkContactId = require("../../middlewares/contactsMiddlewares");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contactsCtrl");

router.get("/", listContacts);

router.get("/:contactId", checkContactId, getContactById);

router.post("/", addContact);

router.delete("/:contactId", checkContactId, removeContact);

router.put("/:contactId", checkContactId, updateContact);

router.patch("/:contactId/favorite", checkContactId, updateStatusContact);

module.exports = router;
