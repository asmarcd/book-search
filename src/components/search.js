import React, { useState } from 'react';

const Search = () => {

    const [bookSearch, setBookSearch] = useState(
        {
            title: "",
            author: ""
        }
    );

    return (
        <p>Search placeholder</p>
    )
}

export default Search