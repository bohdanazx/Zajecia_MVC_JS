const express = require('express');
const errorController = require('../controllers/error');

const router = express.Router();

router.use((req, res) => {
    errorController.getNotFoundPage(req, res);
});

module.exports = router;
