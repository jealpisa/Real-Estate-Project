const router = require('express').Router()

const genUserRouter = require('./users.router');

router.use('/user', genUserRouter)

module.exports = router