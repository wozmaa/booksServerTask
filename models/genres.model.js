const mongoose = require('mongoose')

const genresSchema = mongoose.Schema({
    genresName: String,
    genresDescription: String,
})

const Genres = mongoose.model('Genres', genresSchema);

module.exports = Genres;