const express = require('express');
const router = express.Router();

const authors = [
    { id: 34567, name: 'Author-Name-1' },
    { id: 45678, name: 'Author-Name-2' },
];

router.get('/author/list', (req, res) => {
    const books = [];
    res.render('authors', { authors: authors });
});

module.exports = router;