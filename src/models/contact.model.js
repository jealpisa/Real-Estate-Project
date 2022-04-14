const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name required'],
  },
  surname: {
    type: String,
    required: [true, 'Surname required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'This email has already been registered'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Error: Wrong email format.',
    ],
  },
  phone: {
    type: Number,
    required: [true, 'Password required'],
  },
  notes: {
    type: String,
  }
})

const contactModel = mongoose.model('contact', contactSchema)

module.exports = contactModel
