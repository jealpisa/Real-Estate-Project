const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const PetitionSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  lead: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: true
  },
  dateforthevisit: {
    type: Date, 
    required: false
  }, 
  notes: {
    type: String,
    required: false
  }
});

const PetitionModel = mongoose.model('petition', PetitionSchema);
module.exports = PetitionModel