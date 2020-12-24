import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Book from "./Book"


const Saved = () => {

    const [library, setLibrary] = useState([]);

    useEffect(() => {
        API.getAllBooks().then(bookList => {
            setLibrary(bookList.data.data)
        })
    }, []);

    return (
        <div>
            {library.map(book => (
                <Book title={book.title} author={book.author} description={book.description} image={book.image} link={book.link} id={book._id}/>
            ))}
        </div>
    );
}

export default Saved