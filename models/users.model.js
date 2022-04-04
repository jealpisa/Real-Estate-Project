const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  surname: {
    type: String,
    required: [true, 'Surname is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        )
      },
    },
    unique: [true, 'This is email is registered'],
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'agent', 'buyer'],
    required: false,
    default: 'buyer'
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: false
  },
  petitions: {
    type: mongoose.Schema.Types.ObjectId, 
    required: false
  }, 
  notes: {
    type: String,
    required: false
  }
});

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel