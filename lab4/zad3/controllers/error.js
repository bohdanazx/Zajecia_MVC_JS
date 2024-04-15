const express = require('express');
const router = express.Router();

const getNotFoundPage = (req, res) => {
  res.status(404).render('NotFound', {
    title: 'Not found'
  });
};

module.exports = {
  getNotFoundPage
};
