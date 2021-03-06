const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Book = new Schema ({
    id: String,
    title: String,
    author: String,
    description: String,
    image: String,
    link: String
})

module.exports = mongoose.model('books', Book)