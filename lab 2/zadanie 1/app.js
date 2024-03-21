const http = require("http");
const PORT = 3000;
const home = require("./views/home.js");
const stud = require("./views/student.js");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(home);
        res.end();
    } else if (req.url === "/student") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(stud);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});