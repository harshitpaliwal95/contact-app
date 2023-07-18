const express = require("express");

const router = express.Router();

const {
  getContact,
  getSingleContact,
  createContact,
  deleteContact,
  updateContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContact).post(createContact);

router
  .route("/:id")
  .get(getSingleContact)
  .delete(deleteContact)
  .put(updateContact);

module.exports = router;
