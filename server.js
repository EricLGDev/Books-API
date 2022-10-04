// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

// CONFIG
require('dotenv').config()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

// ROOT INDEX ROUTE
app.get('/', (req, res) => {
    res.send('Books Api')
})

// CONTROLLER
const booksController = require('./controllers/booksController')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
