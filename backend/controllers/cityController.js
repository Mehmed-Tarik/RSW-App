const City = require('../models/cityModel')
const mongoose = require('mongoose')

const createCity = async (req,res) => {
    const {cityName, population, description, bestSeason, 
           options, avgHotel, avgHostel, avgFood, avgMuseum } = req.body
    

    try {
        const city = await City.create({cityName, population, description, bestSeason, 
                                        options, avgHotel, avgHostel, avgFood, avgMuseum})
        res.status(201).json(city)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getCity = async (req, res) => {

    const city = await City.find().sort({createdAt: -1})
    res.status(200).json(city)
}

const getCityDetail = async (req, res) => {

    const city = await City.find({cityName: req.params.cityName})
    res.status(200).json(city)
}

const getQuizResult = async (req,res) => {
    try {
        const { quizData } = req.body;

        if(quizData.season === '') quizData.season = 'summer'
        if(quizData.population === 0) quizData.population = 3645000
        
        const matchingCities = await City.aggregate([
            {
                $match: {
                    bestSeason: { $in: [quizData.season]}
                }
            },
            {
                $match: {
                    options: { $in: quizData.options }
                }
            },
            {
                $addFields: {
                  matchingCount: {
                    $size: {
                      $setIntersection: ["$options", quizData.options]
                    }
                  }
                }
            },
            {
                $match: {
                    $and: [
                        { matchingCount: { $gte: 4 } }, // Include documents with 4 or more matches
                        { population: { $lte: quizData.population } } // Include documents with population within range
                    ]
                }
            },
            {
                $sort: { matchingCount: -1 }
            },
            {
                $limit: 5
            }
        ])

        res.status(200).json(matchingCities);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    createCity,
    getCity,
    getCityDetail,
    getQuizResult
}