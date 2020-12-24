import React, { useState, useContext } from 'react';
import GBAPI from '../utils/GBAPI';
import Book from './Book';
import { BookContext } from './BookContext'

import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Search = () => {

    const [bookSearch, setBookSearch] = useState("");
    const [books, setBooks] = useContext(BookContext)

    const manageInput = e => {
        setBookSearch(e.target.value)
    }

    const googleBooksSearch = () => {
        GBAPI.titleSearch(bookSearch)
            .then(results => {
                setBooks(results.items)
            })
    }

    return (

        <Typography>
            <Input placeholder="Search Books by Title" onChange={manageInput} value={bookSearch.title} />
            <Button onClick={googleBooksSearch}>Search</Button>
            <div>
                {books.map(book => {
                    if (book.volumeInfo.authors) {
                        return (
                            <Book title={book.volumeInfo.title} author={book.volumeInfo.authors[0]} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.thumbnail} link={book.volumeInfo.infoLink} id={book.id} />
                        )
                    } else {
                        return (
                        <Book title={book.volumeInfo.title} author="" description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.thumbnail} link={book.volumeInfo.infoLink} id={book.id} />
                        )
                    }
                }
                )}
            </div>
        </Typography>
    )
}

export default Search