import React, { useContext, useState } from 'react';
import API from '../utils/API';
import { BookContext } from './BookContext';
import { PageContext } from './PageContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        width: "20vw",
        margin: "20px"
    },
    body: {
        width: "60vw"
    },
    buttons: {
        alignItems: "center"
    }
});

const Book = ({ title, author, description, image, link, id, deleteItem }) => {
    const classes = useStyles();

    const [books, setBooks] = useContext(BookContext);
    const [page, setPage] = useContext(PageContext)
    const [open, setOpen] = useState(false);

    const addBook = e => {
        books.forEach(book => {
            if (book.id === e.target.value) {
                API.saveBook({
                    id: book.id,
                    title: book.volumeInfo.title,
                    author: book.volumeInfo.authors[0],
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.thumbnail,
                    link: book.infoLink
                })
            }
        })
        setOpen(true);
    };

    const removeBook = e => {
        API.getAllBooks().then(result => {
            let library = result.data.data;
            library.forEach(book => {
                if (book._id === e.target.value) {
                    API.deleteBook(book._id)
                }
            })
            deleteItem();
        })
    };

    const handleClose = (e, r) => {
        if (r==="clickaway") {
            return;
        }
        setOpen(false);
    };

    if (page === "search") {
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {author}
                    </Typography>
                    <Grid container>
                        <Grid item>
                            <Typography variant="body2" component="p" className={classes.body}>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CardMedia className={classes.media}
                                component="img"
                                alt="Book Cover"
                                image={image}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.buttons}>
                    <Button size="small" href={link}>Learn More on Google Books</Button>
                    <IconButton onClick={addBook} value={id}>
                        <SaveIcon />
                    </IconButton>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Book Saved!
                        </Alert>
                    </Snackbar>

                </CardActions>
            </Card >
        );
    };

    if (page === "saved") {
        return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {author}
                    </Typography>
                    <Grid container>
                        <Grid item>
                            <Typography variant="body2" component="p" className={classes.body}>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CardMedia className={classes.media}
                                component="img"
                                alt="Book Cover"
                                image={image}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.buttons}>
                    <Button size="small" href={link}>Learn More on Google Books</Button>
                    <IconButton onClick={removeBook} value={id}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card >
        )
    }
};

export default Book;