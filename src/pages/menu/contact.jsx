import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    Button: {
        width: "30vw",
        fontSize: "50px",
        background: "repeating-linear-gradient(45deg, white, transparent 10px)",
    },
})



const Contact = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>

            <Button className={classes.Button} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                Contact
                </Button>

            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem>
                    <a target="_blank" href="mailto:dokkyou93@gmail.com">Mail</a>
                </MenuItem>

                <MenuItem>
                    <a target="_blank" href="https://twitter.com/dokkyolax">Twitter</a>
                </MenuItem>

                <MenuItem>
                    <a target="_blank" href="https://www.instagram.com/suke_lax/">Instagram</a>
                </MenuItem>

            </Menu>

        </React.Fragment>

    );
}

export default Contact;