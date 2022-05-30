const Genres = require("../models/genres.model");

module.exports.genresController = {
  postGenres: (req, res) => {
    //ДОБАВЛЕНИЕ ЖАНРА
    Genres.create({
      genresName: req.body.genresName,
      genresDescription: req.body.genresDescription,
    });
  },
  deleteGenresById: (req, res) => {
    //УДАЛЕНИЕ ЖАНРА
    Genres.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json('жанр удален');
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllGenres: (req, res) => {
    //ВЫВОД ВСЕХ ЖАНРОВ
    Genres.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
