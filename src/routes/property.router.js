const router = require('express').Router()

const {
  newProperty, updateProperty, getAllProperties, deletePropertyById
} = require('../controllers/property.controller')

router.post('/', newProperty)
router.put('/:id', updateProperty)
router.get('/', getAllProperties)
router.delete('/:id', deletePropertyById)

module.exports = router