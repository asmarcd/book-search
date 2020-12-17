const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Books = new Schema ({
    title: String,
    author: String,
    description: String,
    image: String,
    link: String
})