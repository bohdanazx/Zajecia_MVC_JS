const express = require('express');
const router = express.Router();

const getAddNewStudentPage = (req, res) => {
  res.render('Home', {
    title: 'Add new student'
  });
};

module.exports = {
  getAddNewStudentPage
};
