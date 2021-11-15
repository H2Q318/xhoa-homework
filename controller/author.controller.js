const {
  createAuthorService,
  getAuthorsService,
  getAuthorByIdService,
  updateAuthorService,
  deleteAuthorService,
} = require('../service/author.service');

async function createAuthor(req, res) {
  const newAuthor = await createAuthorService(req.body);
  res.json({
    message: 'Author created',
  });
}

async function getAuthors(req, res) {
  const query = req.query;

  const foundAuthors = await getAuthorsService(query);
  console.log(foundAuthors);
  return res.json(foundAuthors);
}

async function getAuthorById(req, res) {
  const params = req.params;
  const foundAuthorById = await getAuthorByIdService(params);
  console.log(foundAuthorById);
  return res.json(foundAuthorById);
}

async function updateAuthor(req, res) {
  const params = req.params;
  const author = req.body;
  const authorUpdated = await updateAuthorService(params, author);
  console.log(authorUpdated);
  res.json({
    message: 'Author updated',
  });
}

async function deleteAuthor(req, res) {
  const params = req.params;
  const isDeleted = await deleteAuthorService(params);
  if (!isDeleted) {
    res.status(404).send('Author not found');
  } else {
    res.json({
      message: 'Author deleted',
    });
  }
}

module.exports = {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
