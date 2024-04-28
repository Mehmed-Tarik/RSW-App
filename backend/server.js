const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 
const mongoose = require('mongoose')
require('dotenv').config()

const app = express() 

app.use(bodyParser.json()) 
app.use(cors()) 

const cityRoutes = require('./routes/city')

app.use('/api/city', cityRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database');
        // listen to port
        app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
    }).catch(err => {
        console.log(err)
    }) 