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
  }

}, { timestamps: true }) 

module.exports = mongoose.model('city', citySchema)