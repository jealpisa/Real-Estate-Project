const router = require('express').Router()

const genUserRouter = require('./users.router')
const genPropertyRouter = require('./property.router')
const genAuthRouter = require('./auth.router')

router
  .use('/user', genUserRouter)
  .use('/property', genPropertyRouter)
  .use('/auth', genAuthRouter)

module.exports = router