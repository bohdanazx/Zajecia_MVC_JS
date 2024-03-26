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

app.get('/students', (req, res) => {
  let userList = '<ul>';
  students.forEach(student => {
    userList += `<li>${student.fullName} - ${student.major}</li>`;
  });
  userList += '</ul>';
  res.send(userList);
});


app.post('/students', (req, res) => {
  const { firstName, lastName, major } = req.body;
  const fullName = `${firstName} ${lastName}`;
  students.push({ fullName, major });
  res.send('Student added successfully!');
});

app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  if (id < students.length) {
    students.splice(id, 1);
    res.send(`Student with id ${id} deleted successfully!`);
  } else {
    res.status(404).send('Student not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
