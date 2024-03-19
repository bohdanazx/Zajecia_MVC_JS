const homePage = require('../views/home');
const studentPage = require('../views/student');

function handleHome(res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    homePage.renderPage(res);
}

function handleStudent(res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    studentPage.renderPage(res);
}

module.exports = {
    handleHome,
    handleStudent
};
