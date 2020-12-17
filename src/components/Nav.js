import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Nav = () => {
    const classes = this.props;
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
    </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
};

export default Nav;