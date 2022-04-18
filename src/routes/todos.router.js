const router = require('express').Router()
const {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller')

const { checkUser, checkAdmin } = require('../utils/index')

router
  .get('/', checkUser, checkAdmin, listTodos)
  .post('/', checkUser, checkAdmin, createTodo)
  .put('/:id', checkUser, checkAdmin, updateTodo)
  .delete('/:id', checkUser, checkAdmin, deleteTodo)

module.exports = router