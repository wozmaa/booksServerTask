const mongoose = require('mongoose')

const authorsSchema = mongoose.Schema({
    authorsName: String,
    authorsInfo: String,
})

const Authors = mongoose.model('Author', authorsSchema)

module.exports = Authors;