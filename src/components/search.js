import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import GBAPI from '../utils/GBAPI';
import Book from './Book';

const Search = () => {

    const [bookSearch, setBookSearch] = useState("");
    const [books, setBooks] = useState([])

    const manageInput = e => {
        setBookSearch (e.target.value)
    }

    const googleBooksSearch = () => {
        setBooks([])
        GBAPI.titleSearch(bookSearch)
        .then(results => {
            setBooks(results.items)
        })
    }

    return (
        // TODO: Typography below needs to be updated now that I get how it works.
        <Typography>
            <p>Search by Title</p>
        <Input placeholder = "Title" onChange = {manageInput} value={bookSearch.title}/>
        <Button onClick = {googleBooksSearch}>Search</Button>
        <div>
            {books.map(book => (
                <Book title = {book.volumeInfo.title} author = {book.volumeInfo.authors[0]} description = {book.volumeInfo.description} image = {book.volumeInfo.imageLinks.thumbnail} link = {book.volumeInfo.infoLink}/>
            ))}
        </div>
        
        </Typography>
    )
}

export default Search