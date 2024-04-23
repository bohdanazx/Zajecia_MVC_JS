const Book = require('../models/Book');
const User = require('../models/User');

exports.getBookDetails = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getAll().find(book => book.id === parseInt(bookId));
    const didUserBorrowTheBook = userId ? User.getAll().find(user => user.id === userId).findBorrowedBookById(bookId) : false;
    res.render('book-details', { title: 'Book Details', book, didUserBorrowTheBook });
};

exports.postBookBorrow = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getAll().find(book => book.id === parseInt(bookId));
    const user = User.getAll().find(user => user.id === userId);
    if (book && user) {
        if (book.available) {
            book.borrow();
            user.borrowBook(book);
            res.redirect('/books/borrow/success');
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
};

exports.getBookBorrowSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book borrowed successfully' });
};

exports.postBookReturn = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    const book = Book.getAll().find(book => book.id === parseInt(bookId));
    const user = User.getAll().find(user => user.id === userId);
    if (book && user) {
        if (!book.available && user.findBorrowedBookById(bookId)) {
            book.return();
            user.returnBook(bookId);
            res.redirect('/books/return/success');
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
};

exports.getBookReturnSuccess = (req, res) => {
    res.render('success', { title: 'Success', message: 'Book returned successfully' });
};
