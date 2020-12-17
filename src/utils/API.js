const URL_PREFIX = "http://localhost:3001"
// const URL_PREFIX = "https://wandir.herokuapp.com"

const API = {
    titleSearch:function(titleInput){
        AJAX(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${API_KEY}`)
        .then(response => response.json())
        // Need to fix the line below once I get the API call to work.
        .then(this.setState({books}))
    }

}

module.exports = API;