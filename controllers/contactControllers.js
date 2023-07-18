const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactSchema");

//@decs get all contact
//@route GET /api/contact
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@decs get single contact
//@route GET /api/contact/:id
//@access public
const getSingleContact = asyncHandler(async (req, res) => {
  console.log(res);
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw Error("contact does not found");
  }
  res
    .status(200)
    .json({ data: contact, message: `get single contact ${req.params.id}` });
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
  const contact = Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json({ data: contact, message: `create contact` });
});

//@decs delete contact
//@route DELETE /api/contact/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw Error("contact does not found");
  }
  const deletedContact = await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json({ data: deletedContact, message: `delete contact` });
});

//@decs update contact
//@route PUT /api/contact/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw Error("contact does not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ data: updatedContact, message: `update contact` });
});

module.exports = {
  getContact,
  getSingleContact,
  createContact,
  deleteContact,
  updateContact,
};
