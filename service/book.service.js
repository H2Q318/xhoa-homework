const {
  findBooks,
  createBook,
  findBookById,
  updateBook,
  deleteBook,
} = require('../repository/book.repository');

async function createBookService(book) {
  console.log('creating a new book');
  await createBook(book);
  return book;
}

async function getBooksService(query) {
  console.log('get all books');
  return findBooks(query);
}

async function getBookByIdService(params) {
  console.log('get book by id');
  return findBookById(params);
}

async function updateBookService(params, book) {
  console.log('updating book');
  await updateBook(params, book);
  return book;
}

async function deleteBookService(params) {
  console.log('deleting book');
  return await deleteBook(params);
}

module.exports = {
  createBookService,
  getBooksService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
};
