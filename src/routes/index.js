const router = require('express').Router()

const genUserRouter = require('./users.router')
const genPropertyRouter = require('./property.router')
const genAuthRouter = require('./auth.router')
const genPetitionRouter = require('./petition.router')
const genAdminRouter = require('./admin.router')

router
  .use('/user', genUserRouter)
  .use('/property', genPropertyRouter)
  .use('/auth', genAuthRouter)
  .use('/petition', genPetitionRouter)
  .use('/admin', genAdminRouter)

module.exports = router