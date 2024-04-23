// app.js

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Ustawienie katalogu plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Konfiguracja silnika widoków na ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Konfiguracja sesji
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true
    })
);

// Dodanie middleware bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// Routing dla obsługi błędów
const errorRoutes = require('./routes/error');
app.use('*', errorRoutes);

// Nasłuchiwanie na porcie
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
