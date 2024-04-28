const City = require('../models/cityModel')
const mongoose = require('mongoose')

const createCity = async (req,res) => {
    const {cityName, population, description, bestSeason, options} = req.body

    try {
        const city = await City.create({cityName, population, description, bestSeason, options})
        res.status(201).json(city)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCity = async (req, res) => {

    const city = await City.find().sort({createdAt: -1})

    res.status(200).json(city)
    console.log(city);
}

module.exports = {
    createCity,
    getCity
}