import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Button } from '@material-ui/core';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
<link rel="stylesheet" href="/css/video-react.css" />

const useStyles = makeStyles({
    root: {
        height: "100ph",
        width: "100pw",
        backgroundImage: "url(/images/gunma2.jpg)",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
        opacity: "0.6",
        marginRight: "3%",
        marginLeft: "3%",
        borderRadius: "10px",

    },
    root2: {
        height: "100ph",
        width: "100pw",
        backgroundImage: "url(/images/IMG_1822.JPG)",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
        opacity: "0.8",
        marginRight: "3%",
        marginLeft: "3%",
        borderRadius: "10px",
    },
    root3: {
        height: "100ph",
        width: "100pw",
        backgroundImage: "url(/images/lacrosse.jpg)",
        backgroundSize: "cover",
        backgroundPositionY: "45%",
        opacity: "0.8",
        marginRight: "3%",
        marginLeft: "3%",
        borderRadius: "10px",
    },
    title: {
        color: "skyblue",
        fontFamily: "cursive",
        fontSize: "80px",
        margin: "0",
    },
    font: {
        width: "fit-content",
        fontSize: "30px",
        background: "rgba(255,255,255,0.7)",
        borderRadius: 40,

    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 50,
        marginTop: "50px",
        display: "flex",
    },
});



const Life = () => {
    const classes = useStyles();
    const [click, setClick] = useState("root");
    // const [imgState, setImgState] = useState(true);""はただの初期値。ここに入れたものが最初の値になる//falseはimgStateにはいる。
    //     onClick = {() => {
    //     setImgState(!imgState);//セッター関数に入るものがつぎの値になる。
    // }}


    const change = (current, click) => {
        switch (current) {
            // gunma
            case "root":
                if (click === "baseball") {
                    return "root2"
                } else {
                    return "root3"
                }
            // baseball
            case "root2":
                if (click === "baseball") {
                    return "root"
                } else {
                    return "root3"
                }
            // lacrosse
            case "root3":
                if (click === "baseball") {
                    return "root2"
                } else {
                    return "root"
                }
            default:
                return "root"
        }
    };

    return (
        <React.Fragment>

            <div className={classes[click]}>
                <p className={classes.title}>My LIFE</p>
                <h1 className={classes.font}>野球を10年間。その後大学ではラクロスに転身。</h1>
                <Button className={classes.button}
                    onClick={() => {
                        setClick(change(click, "baseball"))
                    }}
                >Baseball</Button>
                <Button className={classes.button}
                    onClick={() => {
                        setClick(change(click, "lacrosse"))
                    }}
                >Lacrosse</Button>
            </div>
            <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />

        </React.Fragment>
    )
};
export default Life;
