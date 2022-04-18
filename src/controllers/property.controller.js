const bcrypt = require('bcrypt') // BCrypt is needed for encrypt
const jwt = require('jsonwebtoken') // Is requierd for generating a token

const PropertyModel = require('../models/property.model')

async function newProperty(req, res) {
  try {
    const property = await PropertyModel.create({
      title: req.body.title,
      price: req.body.price,
      createdAt: req.body.createdAt,
      photos: req.body.photos,
      category: req.body.category,
      municipality: req.body.municipality[0],
      notes: req.body.privatenotes,
      address: req.body.address,
      bathrooms: req.body.bathrooms,
      description: req.body.description,
      meters: req.body.meters,
      owner: req.body.owner,
      rooms: req.body.rooms,
      ispromo: req.body.ispromo,
      zone: req.body.zone
    })

    res.json({
      title: property.title,
      message: 'Property has been registered with success!',
    })
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

const updateProperty = async (req, res) => {
  try {
    const property = await PropertyModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )
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
      message: 'The Property has been deleted successfully.',
    })
    res
  } catch (error) {
    res.status(500).send(error)
  }
}

const getPropertyByMunicipality = async (req, res) => {
  try {
    const property = await PropertyModel.find({
      municipality: req.query.municipality,
    })
    res.json(property)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

const getAllPromoHouses = async (req, res) => {
  try {
    const property = await PropertyModel.find({
      'ispromo': true,
    })
    res.json(property)
  } catch (error) {}
}

const getPropertyById = async (req, res) => {
  try {
    const property = await PropertyModel.find({
      _id: req.params.id,
    })
    res.json(property)
  } catch (error) {
    res.status(500).send(error)
  }
}

const getNewHouses = async (req, res) => {
  // try {
  //   let result = new Date()
  //   result.setDate(result.getDate() - 30)
  //   const property = await PropertyModel.find({
  //     'createdAt'
  //   })
  //   res.json(property)
  // } catch (error) {}
}

module.exports = {
  newProperty,
  updateProperty,
  getAllProperties,
  deletePropertyById,
  getAllPromoHouses,
  getNewHouses,
  getPropertyById,
  getPropertyByMunicipality
}
