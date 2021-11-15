const {
    findAuthors,
    createAuthor,
    findAuthorById,
    updateAuthor,
    deleteAuthor,
  } = require('../repository/author.repository');
  
  async function createAuthorService(author) {
    console.log('creating a new author');
    await createAuthor(author);
    return author;
  }
  
  async function getAuthorsService(query) {
    console.log('get all authors');
    return findAuthors(query);
  }
  
  async function getAuthorByIdService(params) {
    console.log('get author by id');
    return findAuthorById(params);
  }
  
  async function updateAuthorService(params, author) {
    console.log('updating author');
    await updateAuthor(params, author);
    return author;
  }
  
  async function deleteAuthorService(params) {
    console.log('deleting author');
    return await deleteAuthor(params);
  }
  
  module.exports = {
    createAuthorService,
    getAuthorsService,
    getAuthorByIdService,
    updateAuthorService,
    deleteAuthorService,
  };
  