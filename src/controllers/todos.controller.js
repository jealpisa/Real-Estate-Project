const TodoModel = require('../models/todos.model')

async function createTodo (req, res) {
  try {
    const todo = await TodoModel.create(req.body)
    res.status(200).json(todo)
  } catch (error) {
    console.log(error)
    res.status(500).send('Cannot create todo')
  }
}

async function listTodos (req, res) {
  try {
    const todo = await TodoModel.find()
    res.status(200).json(todo)
  } catch (error) {
    console.log(error)
    res.status(500).send('Cannot list todos')
  }
}

const updateTodo = async (req, res) => {
  try {
    const todo = await TodoModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(todo)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteTodo = async (req, res) => {
  try {
    const todo = await TodoModel.remove({
      _id: req.params.id,
    })
    res.json(todo)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  createTodo,
  listTodos,
  updateTodo,
  deleteTodo
}
