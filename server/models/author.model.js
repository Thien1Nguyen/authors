const mongooes =  require("mongoose")

const AuthorSchema = new mongooes.Schema({
    name:{
        type: String,
        required: [true, "Author's Name is required"],
        minlength: [3, "Author's Name must be at least 3 characters long"]
    }
}, {timestamps: true})

const Author = mongooes.model("Author", AuthorSchema)

module.exports = Author