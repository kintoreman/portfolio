import React from 'react';
import Button from '@material-ui/core/Button';
import { Container, makeStyles } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles({
    root: {
        width: "85vw",
        height: "400px",
        position: "relative",
        background: "#fff",
        padding: "0",
    },
      bg3: {
        width: "85vw",
        height: "400px",
        backgroundImage: "url(/images/imgcontact.jpg)",
        backgroundSize: "cover",
        backgroundPositionY: "40%",
        border: "10px groove #f0f0f0 ",
        borderRadius:"50px",
        opacity: "0.5",
        position: "absolute",
         "&:hover": {
            opacity: 0.8,
        },
    },
    root3: {
        paddingTop: "35vh",
        paddingLeft: "10vw",
        
    },
    Button: {
        width: "180px",
        marginLeft:"8%",
        fontSize: "20px",
        
    },
})



const Contact = () => {
    const classes = useStyles();

    return (

        <React.Fragment>
          <Container className={classes.root}>
           <div className={classes.bg3} />
              <div className={classes.root3}>
                 <Button
                    variant="contained"
                    color="secondary"
                    className={classes.Button}
                    startIcon={<InstagramIcon />}
                    Link  href="https://www.instagram.com/suke_lax/" 
                    >
                Instagram
                 </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.Button}
                    startIcon={<TwitterIcon />}
                    Link  href="https://twitter.com/dokkyolax" 
                    >
                Twitter
                 </Button>

                 <Button
                    variant="contained"
                    color="default"
                    className={classes.Button}
                    startIcon={<MailOutlineIcon />}
                    Link  href="mailto:dokkyou93@gmail.com"
                    >
                Mail
                 </Button>
                </div> 
            </Container>
               




        </React.Fragment>

    );
}

export default Contact;