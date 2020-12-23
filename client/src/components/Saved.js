import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import Book from "./Book"


const Saved = () => {

    const [library, setLibrary] = useState([]);

    useEffect(() => {
        console.log("useeffect")
        API.getAllBooks().then(bookList => {
            console.log(bookList)
            setLibrary(bookList.data.data)
            console.log(library)
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