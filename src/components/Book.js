import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import SaveIcon from '@material-ui/icons/Save'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'

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

const Book = ({ title, author, description, image, link }) => {
    const classes = useStyles();

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
                <IconButton>
                    <SaveIcon />
                </IconButton>
            </CardActions>
        </Card >
    );
};

export default Book;