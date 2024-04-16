const express = require('express');
const router = express.Router();

router.get('/author/list', (req, res) => {
    const authors = [
        { id: 34567, name: 'Author-Name-1' },
        { id: 45678, name: 'Author-Name-2' },
    ];
    res.render('authors', { authors: authors });
});

module.exports = router;