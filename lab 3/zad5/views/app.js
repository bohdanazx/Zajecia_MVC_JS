const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

let students = [];

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/student', (request, response) => {
  response.sendFile(__dirname + '/views/student.html');
});

app.get('/add-student', (request, response) => {
  response.sendFile(__dirname + '/views/add-student.html');
});

app.post('/student', (request, response) => {
  const { firstName, lastName, major } = request.body;
  const fullName = `${firstName} ${lastName}`;
  students.push({ fullName, major });
  response.sendFile(__dirname + '/views/student.html');
});

app.get('/students', (request, response) => {
  let userList = '<ul>';
  students.forEach((student) => {
    userList += `<li><p>${student.fullName} - ${student.major}</p></li>`;
  });
  userList += '</ul>';
  response.send(userList);
});

// Żeby usunąć studenta z listy trzeba skorzystać z komendy "Invoke-WebRequest -Uri http://localhost:3000/student/0 -Method DELETE"
app.delete('/student/:id', (request, response) => {
  const studentId = request.params.id;
  if (studentId >= 0 && studentId < students.length) {
    students.splice(studentId, 1);
    response.send('Student deleted successfully');
  } else {
    response.status(400).send('Invalid student ID');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});