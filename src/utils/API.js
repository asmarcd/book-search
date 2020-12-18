import axios from 'axios'

const API = {
    titleSearch: function (titleInput) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleInput}+intitle&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
            .then(response => response.json())
    },
    getAllBooks: function () {
        API.get('/books')
    },
    saveBook: function (newBook) {
        API.post('/book', newBook)
    },
    deleteBook: function (id) {
        API.deleteBook(`/book/${id}`)
    }
}

module.exports = API;