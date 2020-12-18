import axios from 'axios';

const API = axios.create({
    baseURL: `http://localhost:3000/api`
});

export const getAllBooks = () => API.get('/books');
export const saveBook = newBook => API.post('/book', newBook);
export const deleteBook = id => API.deleteBook(`/book/${id}`);


const apis = {
    getAllBooks,
    saveBook,
    deleteBook
}

export default apis