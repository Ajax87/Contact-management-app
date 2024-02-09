const express = require("express");
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/Contact-Controller");
const router = express.Router();

router.post("/", createContact);

router.get("/", getContacts);

router.get("/:id", getContact);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

//Optimization if we want
// router.route("/").post(createContact).get(getContacts);
// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
