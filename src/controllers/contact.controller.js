const contactModel = require('../models/contact.model')

const createContact = async (req, res) => {
  try {
    const contact = await contactModel.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      notes: req.body.notes,
    })

    res.json({
      name: contact.name,
      email: contact.email,
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllContacts = async (req, res) => {
  try {
    const contact = await contactModel.find()
    res.json(contact)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateContact = async (req, res) => {
  try {
    const contact = await contactModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(contact)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteContactById = async (req, res) => {
  try {
    const contact = await contactModel.remove({
      _id: req.params.id,
    })
    res.json(contact)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getContactById = async (req, res) => {
  try {
    const contact = await contactModel.find({
      _id: req.params.id,
    })
    res.json(contact)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createContact,
  getAllContacts,
  updateContact,
  deleteContactById,
  getContactById
}
