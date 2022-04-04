const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required for the property.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required for the property.'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    required: [false, 'All properties need one category at least. Please, detail the category of this property.']
  },
  province: {
    type: mongoose.Schema.Types.ObjectId,
    required: [false, 'All properties should include their Province. Please, detail it and try again.']
  },
  municipality: {
    type: mongoose.Schema.Types.ObjectId,
    required: [false, 'All properties should include their Municipality. Please, detail it and try again.']
  },
  zone: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  address: {
    type: String,
    required: [false, 'Please, include the address of the property and try again']
  }, 
  availableMeters: {
    type: Number,
    required: [false, 'Please, include useful meters in the property.']
  },
  groundmeters: {
    type: Number, 
    required: [false, 'We need to know how many meters have that property... Can you tell us please?']
  },
  builtmeters: {
    type: Number, 
    required: false
  },
  bathrooms: {
    type: Number, 
    required: false
  },
  description: {
    type: String,
    required: false
  },
  privatenotes: {
    type: String,
    required: false
  },
  extras: {
    type: String,
    required: false,
  }, 
  floor: {
    type: String,
    required: false
  },
  numberoffloors: {
    type: Number, 
    required: false
  },
  photos: {
    type: String,
    required: false
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
});

const PropertyModel = mongoose.model('property', PropertySchema);
module.exports = PropertyModel