const mongoose = require('mongoose')

const booksSchema = mongoose.Schema({
    booksName: String,
    booksAuthor: {
        ref: "Authors",
        type: mongoose.SchemaTypes.ObjectId
    },
    booksGenres: {
        ref: "Genres",
        type: mongoose.SchemaTypes.ObjectId
    },
})

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;