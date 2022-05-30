const mongoose = require('mongoose')

const reviewsSchema = mongoose.Schema({
    reviewsText: String,
    reviewsAuthorsName: String,
    reviewsBooks: {
        ref: 'Books',
        type: mongoose.SchemaTypes.ObjectId
    }
})

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;