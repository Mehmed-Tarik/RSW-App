const express = require('express')
const router = express.Router()

const { createCity, getCity, getQuizResult } = require('../controllers/cityController')

router.get('/', getCity)

router.post('/', createCity)

router.post('/quizresult', getQuizResult)

module.exports = router