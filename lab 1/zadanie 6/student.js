const FULLNAME = "Bohdana Yablinchuk";
const STUDENT_ID = "44101";

function getStudentFullName(id) {
    if (id === 0) {
        return FULLNAME;
    } else if (id === 1) {
        return "Kacper Nowaki 111222";
    } else if (id === 2) {
        return "Maja Kowalska 222333";
    } else {
        return "Michal Wisniewski 333444";
    }
}

function getStudentId(id) {
    if (id === 0) {
        return STUDENT_ID;
    } else if (id === 1) {
        return "111222";
    } else if (id === 2) {
        return "222333";
    } else {
        return "333444";
    }
}

module.exports = { getStudentFullName, getStudentId };