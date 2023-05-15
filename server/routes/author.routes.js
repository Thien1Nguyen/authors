const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    //list all authors
    app.get('/api/authors', AuthorController.getAll)

    //get one author
    app.get('/api/authors/:id', AuthorController.getOne)

    //Create author
    app.post('/api/authors/new', AuthorController.createAuthor)

    //update author
    app.put('/api/authors/update/:id', AuthorController.updateAuthor)

    //delete author
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor)
}