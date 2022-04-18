const router = require('express').Router()

const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContactById,
  getContactById
} = require('../controllers/contact.controller')

const {
  checkUser, checkAdmin
} = require('../utils/index')

router.post('/', checkUser, checkAdmin, createContact)
router.get('/', checkUser, checkAdmin, getAllContacts)
router.put('/:id', checkUser, checkAdmin, updateContact)
router.delete('/:id', checkUser, checkAdmin, deleteContactById)
router.get('/:id', checkUser, checkAdmin, getContactById)

module.exports = router
