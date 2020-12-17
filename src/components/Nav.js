import React, { useContext } from 'react';
import { PageContext } from './PageContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import { ButtonGroup, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Nav = props => {

    const [page, setPage] = useContext(PageContext);

    const updatePage = e => {
        setPage(e.target.value)
    };

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h6">
                    Google Books Search
                </Typography>
                <ButtonGroup variant="contained">
                    <Button value="search" onClick={updatePage}>
                        Search
                    </Button>
                    <Button value="saved" onClick={updatePage}>
                        Saved Books
                    </Button>
                </ButtonGroup>
            </Toolbar>
        </AppBar>
    )
};

export default Nav;