const Reviews = require("../models/reviews.model");

module.exports.reviewsController = {
  postRewInBook: (req, res) => {
    //ДОБАВЛЕНИЕ РЕЦЕНЗИИ К ОПРЕДЕЛЕННОЙ КНИГЕ
    Reviews.create({
      reviewsText: req.body.reviewsText,
      reviewsAuthorsName: req.body.reviewsAuthorsName,
      reviewsBooks: req.body.reviewsBooks,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteReviewsById: (req, res) => {
    //УДАЛЕНИЕ РЕЦЕНЗИИ
    Reviews.findByIdAndRemove(req.params.id)
      .then((data) => {
        res.json('рецензия удалена');
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getReviewsInBook: (req, res) => {
    //ВЫВОД РЕЦЕНЗИЙ К ОПРЕДЕЛЕННОЙ КНИГЕ
    Reviews.find({ Books: req.params.id })
      .populate("Books")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
