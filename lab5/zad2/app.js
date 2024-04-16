const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


const authorsRouter = require('./routes/authors');
app.use('/', authorsRouter);

const booksRouter = require('./routes/books');
app.use('/', booksRouter);

const homeRouter = require('./routes/home');
app.use('/', homeRouter);



app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});