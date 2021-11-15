/**
 * create author
 * get all author
 * get author by id
 * update author
 * delete author
 */

// convert to ES6 
// install eslint, prettier
// transaction 

var express = require('express');
const { createAuthor, getAuthors, getAuthorById, updateAuthor, deleteAuthor } = require('../controller/author.controller');
const createAuthorMiddleware = require('../middlewares/create-author.middleware');
const updateAuthorMiddleware = require('../middlewares/update-author.middleware');
var router = express.Router();


router.get('/',getAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthorMiddleware, createAuthor);
router.put('/:id', updateAuthorMiddleware, updateAuthor)
router.delete('/:id', deleteAuthor);

module.exports = router;
