const router = require('express').Router()

const genUserRouter = require('./users.router')
const genPropertyRouter = require('./property.router')
const genAuthRouter = require('./auth.router')
const genPetitionRouter = require('./petition.router')
const TodoRouter = require('./todos.router')
const genContactRouter = require('./contact.router')

router
  .use('/user', genUserRouter)
  .use('/property', genPropertyRouter)
  .use('/auth', genAuthRouter)
  .use('/petition', genPetitionRouter)
  .use('/todo', TodoRouter)
  .use('/contact', genContactRouter)

module.exports = router