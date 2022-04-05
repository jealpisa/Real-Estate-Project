const router = require('express').Router()

const genUserRouter = require('./users.router')
const genPropertyRouter = require('./property.router')

router
  .use('/user', genUserRouter)
  .use('/property', genPropertyRouter)

module.exports = router