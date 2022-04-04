const bcrypt = require('bcrypt') // BCrypt is needed for encrypt
const jwt = require('jsonwebtoken') // Is requierd for generating a token

const UserModel = require('../models/users.model')

async function newUser(req, res) {
  try {
    const hashed_pwd = bcrypt.hashSync(req.body.password, 10)
    const user = await UserModel.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hashed_pwd,
      phone: req.body.phone,
      role: req.body.role,
      notes: req.body.notes,
    })

    res.json({
      name: user.name,
      email: user.email,
    })
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllUsers = async (req, res) => {
  try {
    const user = await UserModel.find()
    res.json(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteUserById = async (req, res) => {
  try {
    const user = await UserModel.remove({
      _id: req.params.id,
    })
    res.json(user)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  newUser,
  getAllUsers,
  updateUser, 
  deleteUserById
}
