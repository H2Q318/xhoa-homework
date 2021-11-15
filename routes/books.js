var express = require('express');
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('../controller/book.controller');
const createBookMiddleware = require('../middlewares/create-book.middleware');
const updateBookMiddleware = require('../middlewares/update-book.middleware');
var router = express.Router();


router.get('/',getBooks);
router.get('/:id', getBookById);
router.post('/',createBookMiddleware, createBook);
router.put('/:id', updateBookMiddleware, updateBook)
router.delete('/:id', deleteBook);

module.exports = router;
