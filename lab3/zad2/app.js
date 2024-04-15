const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

let students = [];

app.get('/home', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HOME</title>
      </head>
      <body>
        <p>HOME</p>
      </body>
    </html>
  `);
});

app.get('/student', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>STUDENT</title>
      </head>
      <body>
        <p>STUDENT</p>
      </body>
    </html>
  `);
});

app.get('/add-student', (req, res) => {
  res.send(`
      <html>
        <head>
          <title>ADD-STUDENT</title>
        </head>
        <body>
          <form action="/student" method="POST">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName"><br><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName"><br><br>
            <label for="major">Major:</label>
            <input type="text" id="major" name="major"><br><br>
            <button type="submit">Submit</button>
          </form>
        </body>
      </html>
    `);
});

app.post('/student', (req, res) => {
  const fullName = `${firstName} ${lastName}`;
  const { firstName, lastName, major } = req.body;

  students.push({ fullName, major });
  res.send(`
      <html>
        <head>
          <title>STUDENT</title>
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
