const bcrypt = require('bcrypt') // BCrypt is needed for encrypt
const jwt = require('jsonwebtoken') // Is requierd for generating a token

const PetitionModel = require('../models/petition.model')

async function newPetition(req, res) {
  try {
    const petition = await PetitionModel.create({
      property: req.body.property,
      lead: req.body.lead,
      createdAt: req.body.createdAt,
      dateforthevisit: req.body.dateforthevisit,
      notes: req.body.notes
    })

    res.json({
      Message: 'Created a new petition for the property ' + petition.lead,
      Date: petition.dateforthevisit,
    })
  } catch (error) {
    res.status(500).send(error);
  }
}

const getAllPetitions = async (req, res) => {
  try {
    const petition = await PetitionModel.find()
    res.json(petition)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updatePetition = async (req, res) => {
  try {
    const petition = await PetitionModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(petition)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deletePetitionById = async (req, res) => {
  try {
    const petition = await PetitionModel.remove({
      _id: req.params.id,
    })
    res.json(petition)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = {
  newPetition,
  getAllPetitions,
  updatePetition, 
  deletePetitionById
}