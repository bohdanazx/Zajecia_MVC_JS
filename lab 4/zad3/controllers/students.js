let students = [];
let nextId = 1;

const getAddNewStudentPage = (req, res) => {
    res.render('Home', {
        title: 'Add new student'
    });
};

const getStudentsListPage = (req, res) => {
    res.render('List', {
        title: 'List',
        students: students
    });
};

const addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;
    const newStudent = {
        id: nextId,
        fullName: fullName,
        code: code,
        fieldOfStudies: fieldOfStudies
    };
    students.push(newStudent);
    nextId++;
    res.redirect('/success');
};

module.exports = {
    getAddNewStudentPage,
    getStudentsListPage,
    addStudent
};
