const homePage = require('../views/home');
const studentPage = require('../views/student');

function handleHome(res) {
    homePage(res);
}

function handleStudent(req, res) {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        const formData = Buffer.concat(body).toString();
        studentPage(res, formData);
    });
}

module.exports = {
    handleHome,
    handleStudent
};