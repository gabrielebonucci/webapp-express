// connessione al database 
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2301',
  database: 'movies'
});

connection.connect((err) => {
  if (err) throw err;
    console.log('Connected to MySQL!', err);
});

module.exports = connection;