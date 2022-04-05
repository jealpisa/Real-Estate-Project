const mongoose = require('mongoose')

const zones = new mongoose.Schema({
  zone: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'zones',
  },
})

const properties = new mongoose.Schema({
  propertie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'properties',
  },
})

const municipalitiesSchema = new mongoose.Schema({
  municipalitie: {
    type: String,
    required: [true, 'Municipality is required'],
    unique: [true, 'This municipality already exists'],
  },
  zones: [zones],
  contractType: {
    type: String,
    required: [true, 'Contract type is required'],
  },
  properties: [properties],
  contractType: {
    type: String,
    required: [true, 'Contract type is required'],
  },
})

const MunicipalitiesModel = mongoose.model(
  'municipalities',
  municipalitiesSchema
)
module.exports = MunicipalitiesModel
