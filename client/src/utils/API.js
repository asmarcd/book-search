import axios from 'axios';

const API = axios.create({
    baseURL: `/api`
});

export const getAllBooks = () => API.get('/books');
export const saveBook = newBook => API.post('/book', newBook);
export const deleteBook = id => API.delete(`/book/${id}`);

const apis = {
    getAllBooks,
    saveBook,
    deleteBook
}

export default apis