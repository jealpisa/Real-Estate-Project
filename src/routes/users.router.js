const router = require('express').Router()

const {
  newUser, getAllUsers, updateUser, deleteUserById
} = require('../controllers/users.controller')

const { checkUser, checkAdmin } = require('../utils/index')

router.post('/', checkUser, checkAdmin, newUser)
router.get('/', checkUser, checkAdmin, getAllUsers)
router.put('/:id', checkUser, updateUser)
router.delete('/:id', checkUser, checkAdmin, deleteUserById)

module.exports = router