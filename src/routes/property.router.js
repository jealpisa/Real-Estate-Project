const router = require('express').Router()

const {
  newProperty, updateProperty, getAllProperties, deletePropertyById, getAllPromoHouses, getNewHouses
} = require('../controllers/property.controller')

router.post('/', newProperty)
router.put('/:id', updateProperty)
router.get('/', getAllProperties)
router.get('/promo', getAllPromoHouses)
router.get('/new', getNewHouses)
router.delete('/:id', deletePropertyById)

module.exports = router