// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// CONFIG
require('dotenv').config()
const PORT = process.env.PORT

// MIDDLEWARE
app.use(express.json())

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
