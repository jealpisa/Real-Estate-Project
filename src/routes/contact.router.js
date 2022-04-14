const router = require('express').Router()

const {
  createContact,
  getAllContacts,
  updateContact,
  deleteContactById,
  getContactById
} = require('../controllers/contact.controller')

router.post('/', createContact)
router.get('/', getAllContacts)
router.put('/:id', updateContact)
router.delete('/:id', deleteContactById)
router.get('/:id', getContactById)

module.exports = router
