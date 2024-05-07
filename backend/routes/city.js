const express = require('express')
const router = express.Router()

const { createCity, getCity, getCityDetail, getQuizResult } = require('../controllers/cityController')

router.post('/', createCity)

router.get('/', getCity)

router.get('/:cityName', getCityDetail)

router.post('/quizresult', getQuizResult)

module.exports = router