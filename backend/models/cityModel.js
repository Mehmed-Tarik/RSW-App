const mongoose = require('mongoose')

const Schema = mongoose.Schema

const citySchema = new Schema({
  cityName: {
    type: String,
    required: true
  },
  population: {
    type: Number,
    required: true
  }, 
  description: {
    type: String,
  },
  bestSeason: {
    type: [String],
    required: true
  },
  options: {
    type: [String],
  },
  avgHotel: {
    type: Number
  },
  avgHostel: {
    type: Number
  },
  avgFood: {
    type: Number
  },
  avgMuseum: {
    type: Number
  }

}, { timestamps: true }) 

module.exports = mongoose.model('city', citySchema)