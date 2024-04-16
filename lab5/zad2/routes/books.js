const express = require('express');
const router = express.Router();

router.get('/book/list', (req, res) => {
    const books = [
        { id: 12345, title: 'Book Title-1' },
        { id: 23456, title: 'Book Title-2' },
    ];
    res.render('books', { books: books });
});

module.exports = router;