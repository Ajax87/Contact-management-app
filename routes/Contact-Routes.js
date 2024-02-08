const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/Contact-Controller");
const router = express.Router();

router.route("/").post(createContact);

router.route("/").get(getContacts);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

//Optimization if we want
// router.route("/").post(createContact).get(getContacts);
// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
