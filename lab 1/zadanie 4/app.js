const http = require('http');
const student = require('./student');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    console.log(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
});