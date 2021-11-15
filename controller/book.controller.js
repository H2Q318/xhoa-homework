const { createBookDto } = require('../dto/createBook.dto');
const {
  createBookService,
  getBooksService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
} = require('../service/book.service');

async function createBook(req, res) {
  const newBook = await createBookService(createBookDto(req.body));
  res.json({
    message: 'Book created',
  });
}

async function getBooks(req, res) {
  const query = req.query;

  const foundBooks = await getBooksService(query);
  console.log(foundBooks);
  return res.json(foundBooks);
}

async function getBookById(req, res) {
  const params = req.params;
  const foundBookById = await getBookByIdService(params);
  console.log(foundBookById);
  return res.json(foundBookById);
}

async function updateBook(req, res) {
  const params = req.params;
  const book = req.body;
  const bookUpdated = await updateBookService(params, book);
  console.log(bookUpdated);
  res.json({
    message: 'Book updated',
  });
}

async function deleteBook(req, res) {
  const params = req.params;
  const isDeleted = await deleteBookService(params);
  if (!isDeleted) {
    res.status(404).send('Book not found');
  } else {
    res.json({
      message: 'Book deleted',
    });
  }
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
