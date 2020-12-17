import React, { useState } from 'react';
import { Typography } from '@material-ui/core'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import API from './../utils/API'

const Search = () => {

    const [bookSearch, setBookSearch] = useState("");

    const manageInput = e => {
        setBookSearch (e.target.value)
    }

    const googleBooksSearch = titleInput => {
        API.titleSearch(bookSearch)
    }

    return (
        <Typography variant = "h6">
            <p>Search</p>
        <Input placeholder = "Title" onChange = {manageInput} value={bookSearch.title}/>
        <Button onClick = {googleBooksSearch}>Search</Button>
        </Typography>
    )
}

export default Search