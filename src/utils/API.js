const URL_PREFIX = "http://localhost:3001"
// const URL_PREFIX = "https://wandir.herokuapp.com"

const API = {
    titleSearch: function (titleInput) {
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleInput}+intitle&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
            .then(response => response.json())
    }

}

module.exports = API;