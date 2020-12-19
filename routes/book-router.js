const express = require('express')

const BookCtrl = require('../controllers/book-ctrl')

const router = express.Router()

router.post('/book', BookCtrl.saveBook)
router.delete('/book/:id', BookCtrl.deleteBook)
router.get('/books', BookCtrl.getBooks)

module.exports = router