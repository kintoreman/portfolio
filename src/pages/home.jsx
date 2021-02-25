import React, { useState } from "react"
import { makeStyles } from '@material-ui/core';
import Menu from "./menu/menu";
import Button from "./button/button";
import Contact from "./menu/contact";
import Me from "./me/me";
import { useSpring, animated } from "react-spring";

//静的ファイルは基本的にはpublicにいれる！！
//iconとかもpublicにいれる
//srcなどに入れる時にはimportするときなどである！

const useStyles = makeStyles({
    h1: {
        display: "flex",
        justifyContent: "center",
        marginTop: "3%",
    }
})

const Home = () => {
    const classes = useStyles();
    const [enter, setEnter] = useState(false);
    const spring = useSpring({
        fontSize: enter ? "60px" : "31px" ,
        color: enter ? "yellow" : "black"
    });

    return (
        //titleに背景とコンポーネントMenuをいれたい
        <React.Fragment>
    
            <Menu />
            <animated.div 
                className={classes.h1}
                style={spring}
                onMouseEnter={e => setEnter(true)}
                onMouseLeave={e => setEnter(false)}
            >
                ---Profile---
            </animated.div>
            <Me />
            <animated.div 
                className={classes.h1}
                style={spring}
                onMouseEnter={e => setEnter(true)}
                onMouseLeave={e => setEnter(false)}
            >
                ---Contact---
            </animated.div>
           
            <Contact />
            
            <animated.div 
                className={classes.h1}
                style={spring}
                onMouseEnter={e => setEnter(true)}
                onMouseLeave={e => setEnter(false)}
            >
                ---Skills---
            </animated.div>

            <Button />

        </React.Fragment>
    );
}
//Typographyは言葉をいれるためのAPI
//Containerは枠組み的な要素である。
export default Home;