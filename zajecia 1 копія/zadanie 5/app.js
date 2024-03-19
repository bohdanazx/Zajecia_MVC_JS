const http = require('http');
const student = require('./student');

const PORT = 3000;

const requestListener = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <html>
            <head><title>About student</title></head>
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