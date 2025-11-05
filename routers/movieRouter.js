const express = require("express");
const router = express.Router();

// Importo il controller
const movieController = require("../controllers/movieController");

// rotta per ottenere tutti i film
router.get("/", movieController.index);

// rotta per film specifico con recensioni
router.get("/:id", movieController.show);

// rotta per creare una nuova recensione per un film
router.post("/:id/reviews", movieController.storeReview);

module.exports = router;
