import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        //backgroundImage: "url(/images/S__27287565.jpg)",
        width: "100vw",//vwとは画面の横幅１００％
        display: "flex",
    },
    list: {
        width: "100vw",
        display: "flex",
        margin: "revert",
    },
    title: {
        width: "100vw",
        fontSize: "28px",
        fontFamily: "'Mv Boli',sans-serif",
        display: "flex",
        justifyContent: "flex-end",
    },
    li: {
        marginRight: "5%",
    },
    "&:hover,&$change": {
        background: "silver",
    },
    change: {},



    // Button: {
    //     width: "30vw",
    //     fontSize: "50px",
    //     backgroundColor: "silever",
    // },
})



const FxMenu = () => {
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

            <ul className={classes.list}>
                <h1 className={classes.title}>
                    <li className={classes.li} > <a href="http://localhost:3000/">Home</a></li>
                    <li className={classes.li}><a href="https://www.dokkyo.ac.jp/">Dokkyo</a></li>
                    <li className={classes.li}> <a href="https://profile.ameba.jp/ameba/dokkyo-mens-lacrosse/">Blog</a></li>
                    <li className={classes.li}> <a href="https://github.com/shunsukesakaino">Git</a></li>
                </h1>

                {/* <Button className={classes.Button} aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                    Contact
                </Button> */}
            </ul>



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

export default FxMenu;