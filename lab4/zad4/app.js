const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('./controllers/students');
const errorController = require('./controllers/error');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Home', { pageTitle: 'Home' });
});

app.get('/success', (req, res) => {
    res.render('Success', { pageTitle: 'Success' });
});

app.get('/students-list', studentController.getStudentsListPage);

app.post('/add-student', studentController.addStudent);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
