const Authors = require("../models/author.model")

//get all
module.exports.getAll = (req, res) =>{
    Authors.find().sort({name: 1})
    .then(allAuthors => {res.json({results: allAuthors})})
    .catch(err => res.json({err: err}))
}

//create
module.exports.createAuthor = (req, res) =>{
    Authors.create(req.body)
    .then(newAuthor => {res.json({results: newAuthor})})
    .catch(err => res.status(400).json(err))
}

//get one
module.exports.getOne = (req, res) =>{
    Authors.find({_id: req.params.id})
    .then(Author => {res.json({results: Author})})
    .catch(err => res.json({err: err}))
}

//update by id
module.exports.updateAuthor = (req, res) =>{
    Authors.findByIdAndUpdate({_id: req.params.id}, req.body,{ runValidators: true })
    .then(updateAuthor => {res.json({results: updateAuthor})})
    .catch(err => res.status(400).json(err))
}

//delete by id
module.exports.deleteAuthor = (req, res) =>{
    Authors.deleteOne({_id: req.params.id})
    .then(updateAuthor => {res.json({results: updateAuthor})})
    .catch(err => res.json({err: err}))
}