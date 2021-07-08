const express = require('express')
const books = require('../models/book')
const bookContr = require('../controllers/bookController')
const router = express.Router()
const authUserJwtoken=require('../controllers/userController')


router.get('/books', bookContr.findAllBooks)
router.get('/books/:bookID',authUserJwtoken.authorizationAdmin, bookContr.findBookByi)
router.post('/books' ,bookContr.savedBook)
router.put('/books/:bookID',authUserJwtoken.authorizationAdmin, bookContr.updatedBooks)
router.delete('/books/:bookID', authUserJwtoken.authorizationAdmin,bookContr.deleteByID)


module.exports = router;
