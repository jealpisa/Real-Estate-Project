const bcrypt = require('bcrypt') // BCrypt is needed for encrypt
const jwt = require('jsonwebtoken') // Is requierd for generating a token

const PropertyModel = require('../models/property.model')

async function newProperty(req, res) {
  try {
    const property = await PropertyModel.create({
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
      province: req.body.province,
      municipality: req.body.municipality,
      zone: req.body.zone,
      address: req.body.address, 
      availableMeters: req.body.availableMeters, 
      groundmeters: req.body.groundMeters, 
      builtmeters: req.body.builtmeters, 
      bathrooms: req.body.bathrooms, 
      description: req.body.description,
      privatenotes: req.body.privatenotes, 
      extras: req.body.extras, 
      floor: req.body.floor, 
      numberoffloors: req.body.numberoffloors,
      photos: req.body.photos,
      createdAt: req.body.createdAt,
      petitions: req.body.petitions
    })

    res.json({
      title: property.title,
      message: 'Property has been registered with success!'
    })
  } catch (error) {
    res.status(500).send(error);
  }
}

const updateProperty = async (req, res) => {
  try {
    const property = await PropertyModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(property)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllProperties = async (req, res) => {
  try {
    const property = await PropertyModel.find()
    res.json(property)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deletePropertyById = async (req, res) => {
  try {
    const property = await PropertyModel.remove({
      _id: req.params.id,
    })
    res.json({
      title: property.title,
      message: 'The Property has been deleted successfully.'
    })
    res
  } catch (error) {
    res.status(500).send(error)
  }
}

const getAllPromoHouses = async (req, res) => {
    try {
        const property = await PropertyModel.find({
            "ispromo": true
        })
        res.json(property)
    } catch (error) {
        
    }
       
}

module.exports = {
  newProperty,
  updateProperty,
  getAllProperties,
  deletePropertyById,
  getAllPromoHouses
}
