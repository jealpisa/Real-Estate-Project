const router = require('express').Router()
const {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller')

router
  .get('/', listTodos)
  .post('/', createTodo)
  .put('/:id', updateTodo)
  .delete ('/:id', deleteTodo)

module.exports = router