const URL_PREFIX = "http://localhost:3001"
// const URL_PREFIX = "https://wandir.herokuapp.com"

const API = {
    titleSearch:function(titleInput){
        console.log(`"API" + ${titleInput}`)
        return "data"
    }

}

module.exports = API;