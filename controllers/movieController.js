//
const connection = require('../data/db');

function index(req, res) {

  const sql = 'SELECT * FROM movies';
  // Eseguiamo la query
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
  });
}

// Esporto la funzione per usarla nel router
module.exports = {index};