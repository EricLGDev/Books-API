// DEPENDENCIES
const express = require('express')
const books = express.Router()
const Book = require('../models/book.js')

// INDEX
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({
                message: 'An error has occurred, could not get all books'
            })
        })
})


// EXPORT
module.exports = books