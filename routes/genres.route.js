const { Router } = require("express");

const { genresController } = require("../controllers/genres.controller");

const router = Router();

router.get("/genres", genresController.getAllGenres);
router.post("/genres/:id", genresController.postGenres);
router.delete("/genres/:id", genresController.deleteGenresById);

module.exports = router;
