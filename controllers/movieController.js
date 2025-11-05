//
const connection = require("../data/db");

function index(req, res) {
  const sql = "SELECT * FROM movies";
  // Eseguiamo la query
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    res.json(results);
  });
}

// Show
function show(req, res) {
  //
  const id = parseInt(req.params.id);

  const movieSql = "SELECT * FROM movies WHERE id = ?";
  const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

  // prima query per il film
  connection.query(movieSql, [id], (err, movieResults) => {
    if (err)
      return res.status(500).json({ error: "Database query failed (movie)" });
    if (movieResults.length === 0)
      return res.status(404).json({ error: "Movie not found" });

    // Recupero il film
    const movie = movieResults[0];

    // se ok eseguo la seconda query per le recensioni
    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err)
        return res
          .status(500)
          .json({ error: "Database query failed (reviews)" });

      // Aggiungo le recensioni al film
      movie.reviews = reviewsResults;

      res.json(movie);
    });
  });
}

function storeReview(req, res) {
  // recuperiamo id da param
  const id = req.params.id;
  // recuperiamo i dati nel body
  const { name, vote, text } = req.body;
  // prepariamo la query per la chiamata al DB
  const sql =
    "INSERT INTO `reviews` (`name`, `vote`, `text`, `movie_id`) VALUES (?,?,?,?)";
  // eseguiamo la query (con check preventivo dei dati)
  connection.query(sql, [name, vote, text, id], (err, result) => {
    // se c'è errore server DB
    if (err) return res.status(500).json({ error: "Database query failed" });
    // se va tutto bene
    res.status(201);
    res.json({ id: result.insertId, message: "Review added" });
  });
}

// Esporto la funzione per usarla nel router
module.exports = { index, show, storeReview };
