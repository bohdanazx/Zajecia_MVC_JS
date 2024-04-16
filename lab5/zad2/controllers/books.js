const express = require('express');
const router = express.Router();

const books = [
    { id: 12345, title: 'Book Title-1' },
    { id: 23456, title: 'Book Title-2' },
];


router.get('/book/list', (req, res) => {
    const books = [];
    res.render('books', { books: books });
});

module.exports = router;