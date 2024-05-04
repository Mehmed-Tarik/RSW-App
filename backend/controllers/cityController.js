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

const getQuizResult = async (req,res) => {
    try {
        const { quizData } = req.body;

        if(quizData.season === '') quizData.season = 'summer'
        
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
    getQuizResult
}