const asyncHandler = require("express-async-handler");

//@decs get all contact
//@route GET /api/contact
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

//@decs get single contact
//@route GET /api/contact/:id
//@access public
const getSingleContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `get single contact ${req.params.id}` });
});

//@decs create  contact
//@route POST /api/contact/:id
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("create response: ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("All files required!");
  }
  res.status(201).json({ message: `create contact` });
});

//@decs delete contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete contact` });
});

//@decs update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update contact` });
});

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  deleteContact,
  updateContact,
};
