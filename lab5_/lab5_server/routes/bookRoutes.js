const express = require('express')
const books = require('../models/book')
const bookContr = require('../controllers/bookController')
const router = express.Router()


router.get('/books', bookContr.findAllBooks)
router.get('/books/:bookID', bookContr.findBookByi)
router.post('/books', bookContr.savedBook)
router.put('/books/:bookID', bookContr.updatedBooks)
router.delete('/books/:bookID', bookContr.deleteByID)


module.exports = router;
