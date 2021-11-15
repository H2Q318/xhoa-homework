const connection = require('../database');

async function findAuthors(query) {
  try {
    return connection('authors')
      .select(
        'authors.id',
        'authors.name',
        'authors.address',
        'authors.created_at',
        'authors.updated_at'
      );
  } catch (error) {
    console.log(error);
  }
}

async function findAuthorById(params) {
  const id = params.id;
  try {
    return connection('authors')
      .select(
        'authors.id',
        'authors.name',
        'authors.address',
        'authors.created_at',
        'authors.updated_at'
      )
      .where('authors.id', '=', id);
  } catch (error) {
    console.log(error);
  }
}

async function createAuthor(author) {
  try {
    return connection('authors').insert(author);
  } catch (error) {
    console.log(error);
  }
}

async function updateAuthor(params, author) {
  try {
    return connection('authors').where(params).update({
      name: author.name,
      address: author.address,
      created_at: author.created_at,
      updated_at: author.updated_at
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteAuthor(params) {
  const id = params.id;
  try {
    return connection('authors').where('id', id).del();
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  findAuthors,
  findAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
