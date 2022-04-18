const mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  photos: {
    type: String,
  },
  category: {
    type: String,
    enum: ['Vivienda', 'Local Comercial', 'Nave Industrial'],
  },
  municipality: {
    type: String,
    enum: [
      'Adeje',
      'Arafo',
      'Arico',
      'Arona',
      'Buenavista del Norte',
      'Candelaria',
      'El Rosario',
      'El Sauzal',
      'El Tanque',
      'Fasnia',
      'Garachico',
      'Granadilla de Abona',
      'Güímar',
      'Guía de Isora',
      'Icod de los Vinos',
      'La Guancha',
      'La Matanza de Acentejo',
      'La Orotava',
      'La Victoria de Acentejo',
      'Los Realejos',
      'Los Silos',
      'Puerto de la Cruz',
      'San Cristóbal de la Laguna',
      'San Juan de la Rambla',
      'San Miguel de Abona',
      'Santa Cruz de Tenerife',
      'Santa Úrsula',
      'Santiago del Teide',
      'Tacoronte',
      'Tegueste',
      'Vilaflor',
    ],
  },
  notes: {
    type: String,
  },
  address: {
    type: String,
  },
  bathrooms: {
    type: String,
  },
  description: {
    type: String,
  },
  meters: {
    type: String,
  },
  owner: {
    type: String,
  },
  rooms: {
    type: String,
  },
  ispromo: {
    type: Boolean,
    default: false,
  },
  zone: {
    type: String,
  }
})

const PropertyModel = mongoose.model('property', PropertySchema)

module.exports = PropertyModel