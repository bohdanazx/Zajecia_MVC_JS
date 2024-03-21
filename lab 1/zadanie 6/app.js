const http = require('http');
const student = require('./student');

const PORT = 3000;

const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About student</title>
    </head>
    <body>
        <p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>
    </body>
    </html>
  `);
};
const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});