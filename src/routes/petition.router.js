const router = require('express').Router()

const { newPetition, getAllPetitions, updatePetition, deletePetitionById } = require('../controllers/petition.controller')

router.post('/', newPetition)
router.get('/', getAllPetitions)
router.put('/:id', updatePetition)
router.delete('/:id', deletePetitionById);

module.exports = router