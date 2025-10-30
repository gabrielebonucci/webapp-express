const express = require('express');
const app = express();
const port = 3000;

// Importo la connessione 
const connection = require('./data/db'); 

app.get('/', (req, res) => {
  res.send('<h1>Server Web App Movies</h1>');
});

// Rotte per i film 
// app.use('/movies', ...) 

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});