const Books = require("../models/books.model");

module.exports.booksController = {
  postBooks: (req, res) => {
    //ДОБАВЛЕНИЕ КНИГИ
    Books.create({
      booksName: req.body.booksName,
      bookaAuthor: req.body.bookaAuthor,
      booksGenres: req.body.booksGenres,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  deleteBooksById: (req, res) => {
    //УДАЛЕНИЕ КНИГИ
    Books.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("книга удалена");
      })
      .catch((e) => {
        res.json(e);
      });
  },
  patchBooksById: (req, res) => {
    //ИЗМЕНЕНИЕ КНИГИ
    Books.findByIdAndUpdate(req.params.id, {
      booksName: req.body.booksName,
      bookaAuthor: req.body.bookaAuthor,
      booksGenres: req.body.booksGenres,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getBooksById: (req, res) => {
    //ВЫВОД ОПРЕДЕЛЕННОЙ КНИГИ
    Books.findById(req.params.id)
      .populate("booksGenres")
      .populate("bookaAuthor")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getAllBooks: (req, res) => {
    //ВЫВОД ВСЕХ КНИГ
    Books.find()
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
  getBooksByGenres: (req, res) => {
    //ВЫВОД ВСЕХ КНИГ ИЗ ОПРЕДЕЛЕННОГО ЖАНРА
    Books.find({ booksGenres: req.params.id })
      .populate("booksGenres")
      .populate("booksAuthor")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};
