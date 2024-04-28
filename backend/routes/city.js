const express = require('express')
const router = express.Router()

const { createCity, getCity } = require('../controllers/cityController')

router.get('/', getCity)

router.post('/', createCity)

module.exports = router