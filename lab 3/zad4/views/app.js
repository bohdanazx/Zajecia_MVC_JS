const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let students = [];

app.use((req, res, next) => {
  const currentDate = new Date().toLocaleString();
  console.log(`Request ${req.method} on path ${req.url} ${currentDate}`);
  next();
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'student.html'));
});

app.get('/add-student', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'add-student.html'));
});

app.post('/student', (req, res) => {
  const fullName = `${firstName} ${lastName}`;
  const { firstName, lastName, major } = req.body;

  students.push({ fullName, major });
  res.send(`
      <html>
        <head>
          <title>STUDENT</title>
          <link rel="stylesheet" href="/css/main.css">
        </head>
        <body>
          <p>Hello, ${fullName} on ${major} studies!</p>
        </body>
      </html>
    `);
});

app.get('/students', (req, res) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li>${student.fullName} - ${student.major}</li>`;
  });
  userList += '</ul>';
  res.send(userList);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
