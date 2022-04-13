const { ObjectId } = require('bson')
const mongoose = require('mongoose');
const { postZone } = require('../controllers/admin.controller');

const category = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  },
});

  const province = new mongoose.Schema({
    province: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "province"
    }, 
  });  

  const municipality = new mongoose.Schema({
    municipality: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "municipality"
    }, 
  });  

  const zone = new mongoose.Schema({
    zone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "zone"
    }, 
  });  

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required for the property.'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required for the property.'],
  },
  category: [category],
  contractType: {
    type: String,
    required: [false, "Contract type is required"],
  },  
  province: [province],
  contractType: {
    type: String,
    required: [false, "Contract type is required"],
  },
  municipality: [municipality],
  contractType: {
    type: String,
    required: [false, "Contract type is required"],
  },
  zone: [zone],
  contractType: {
    type: String,
    required: [false, "Contract type is required"],
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