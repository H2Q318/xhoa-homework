const connection = require('../database');

async function findBooks(query) {
  try {
    return connection('books')
      .join('authors', 'books.author_id', '=', 'authors.id')
      .select(
        'books.id',
        'books.title',
        { authorId: 'books.author_id' },
        { createdAt: 'books.created_at' },
        { updatedAt: 'books.updated_at' },
        'authors.name',
        'authors.address'
      );
  } catch (error) {
    console.log(error);
  }
}

async function findBookById(params) {
  const id = params.id;
  try {
    return connection('books')
      .join('authors', 'books.author_id', '=', 'authors.id')
      .select(
        'books.id',
        'books.title',
        { authorId: 'books.author_id' },
        { createdAt: 'books.created_at' },
        { updatedAt: 'books.updated_at' },
        'authors.name',
        'authors.address'
      )
      .where('books.author_id', '=', id);
  } catch (error) {
    console.log(error);
  }
}

async function createBook(book) {
  try {
    return connection('books').insert(book);
  } catch (error) {
    console.log(error);
  }
}

async function updateBook(params, book) {
  try {
    return connection('books').where(params).update({
      title: book.title,
      author_id: book.author_id,
      created_at: book.created_at,
      updated_at: book.updated_at,
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteBook(params) {
  const id = params.id;
  try {
    return connection('books').where('id', id).del();
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  findBooks,
  findBookById,
  createBook,
  updateBook,
  deleteBook,
};
