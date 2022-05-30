const { Router } = require("express");

const { booksController } = require("../controllers/books.controller");

const router = Router();

router.post("/books/:id", booksController.postBooks);
router.delete("/books/:id", booksController.deleteBooksById);
router.patch("/books/:id", booksController.patchBooksById);
router.get("/books", booksController.getAllBooks);
router.get("/books/:id", booksController.getBooksById);
router.get("/genres/books/:id", booksController.getBooksByGenres);

module.exports = router;
