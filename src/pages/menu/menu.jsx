import React from 'react';
import { makeStyles } from '@material-ui/core';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles({
    root: {
        //backgroundImage: "url(/images/S__27287565.jpg)",
        width: "100vw",//vwとは画面の横幅１００％
        display: "flex",
    },
    p:{
        fontSize:"25px",
        fontVariant: "full-width",
        margin: "auto",
        marginLeft: "5%",
        display: "flex",
        background: "rgba(255,25,255,0.1)",
        border: "green",
        borderRadius:"50px",
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
    "&:hover": {
        background: "silver",
    },
},




    // Button: {
    //     width: "30vw",
    //     fontSize: "50px",
    //     backgroundColor: "silever",
    // },
})



const FxMenu = () => {
    const classes = useStyles();
   
    return (
        <React.Fragment>


            <ul className={classes.list}>
                 <p className={classes.p}>
                 <FitnessCenterIcon style={{color: 'red'}} />
                     kintoreman
                 <FitnessCenterIcon />
                 </p>
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

        </React.Fragment>
            );
        }

export default FxMenu;