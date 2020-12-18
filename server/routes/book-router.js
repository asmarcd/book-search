const Book = require("../models/book-model")

saveBook = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "No book found",
        })
    };

    const book = new Book(body);

    if (!book) {
        return res.status(400).json({ success: false, error: err })
    };

    book.save().then(() => {
        return res.status(201).json({
            success: true,
            id: book._id,
            message: 'Book saved!'
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Book not saved'
        })
    });
};

deleteBook = async (req, res) => {
    await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };

        if (!book) {
            return res.status(404).json({ success: false, error: `Book not found` })
        };

        return res.status(200).json({ success: true, data: book })
    }).catch(err => console.log(err));
};

getBooks = async (req, res) => {
    await Book.find({}, (err, books) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        };

        if(!books.length) {
            return res.status(404).json({ success: false, error: `Books not found` })
        };

        return res.status(200).json({ success: true, data: books })
    }).catch(err => console.log(err))
};

module.exports = {
    saveBook,
    deleteBook,
    getBooks
}