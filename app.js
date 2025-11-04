const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
// Importo la connessione 
const connection = require('./data/db'); 
// Importo il router per i film
const movieRouter = require('./routers/movieRouter');

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Server Web App Movies</h1>');
});

app.use('/movies', movieRouter);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});