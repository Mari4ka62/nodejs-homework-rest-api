const express = require("express");
const router = express.Router();

const checkContactId = require("../../middlewares/contactsMiddlewares");
const { authenticate } = require("../../middlewares/userMiddlewares");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");

router.get("/", authenticate, listContacts);

router.get("/:contactId", authenticate, checkContactId, getContactById);

router.post("/", authenticate, addContact);

router.delete("/:contactId", authenticate, checkContactId, removeContact);

router.put("/:contactId", authenticate, checkContactId, updateContact);

router.patch(
  "/:contactId/favorite",
  authenticate,
  checkContactId,
  updateStatusContact
);

module.exports = router;
