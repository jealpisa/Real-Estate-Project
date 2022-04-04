const router = require('express').Router()

const {
  newUser, getAllUsers, updateUser, deleteUserById
} = require('../controllers/users.controller')

router.post('/', newUser)
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUserById);

module.exports = router