const { Router } = require("express");

const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/reviews", reviewsController.postRewInBook);
router.delete("/reviews/:id", reviewsController.deleteReviewsById);
router.get("/reviews", reviewsController.getReviewsInBook);

module.exports = router;
