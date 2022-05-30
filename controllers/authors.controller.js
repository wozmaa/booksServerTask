const Authors = require("../models/authors.model");

module.exports.authorController = {
  postAuthors: (req, res) => {
    Authors.create({
      authorsName: req.body.authorsName,
      authorsInfo: req.body.authorsInfo,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteAuthorsById: (req, res) => {
    Authors.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("автор удален");
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
