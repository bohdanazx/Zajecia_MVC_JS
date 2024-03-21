const http = require("http");
const PORT = 3000;
const { handleHome, handleStudent } = require("./routes");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleHome(res);
    } else if (req.url === "/student") {
        handleStudent(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<html><head><title>404 Not Found</title></head><body>404 Not Found</body></html>");
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});