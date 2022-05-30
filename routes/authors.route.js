const { Router } = require("express");

const { authorController } = require("../controllers/authors.controller");

const router = Router();

router.post("/authors", authorController.postAuthors);
router.delete("authors", authorController.deleteAuthorsById);

module.exports = router;
