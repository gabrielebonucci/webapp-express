const express = require('express');
const router = express.Router();

// Importo il controller
const movieController = require('../controllers/movieController');
// Definisco la rotta per ottenere tutti i film
router.get('/', movieController.index);

module.exports = router;