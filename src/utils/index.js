const jwt = require('jsonwebtoken')

const UserModel = require('../models/users.model')

function checkUser(req, res, next) {
  console.log(req.headers.authorization)
  if (!req.headers.token) {
    return res.status(403).json({ error: 'No Token Found' })
  }

  jwt.verify(req.headers.token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.send('Token not valid')
    
    const user = await UserModel.findOne({email: decoded.email})
    console.log(user)

    if (user) {
      res.locals.user = user
      next()
    } else {
      res.send('User not found')
    }
  })
}

function checkAdmin(req, res, next) {
  if (res.locals.user.role === 'admin') {
    return next()
  }
  return res.send('Unauthorized access')
}

function checkRole(req, res, next) {
  if (res.locals.user.role === 'admin' || res.locals.user.role === 'agent') {
    return next()
  }
  return res.send('Unauthorized access')
}

function checkAgent(req, res, next) {
  if (res.locals.user.role === 'admin' || res.locals.user.role === 'agent') {
    return next()
  }
  return res.send('Unauthorized access')
}

module.exports = {
  checkUser,
  checkAdmin,
  checkAgent,
  checkRole,
}
