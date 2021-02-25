import React, { useState } from "react"
import { makeStyles } from '@material-ui/core';
import Menu from "./menu/menu";
import Button from "./button/button";
import Contact from "./menu/contact";
import Me from "./me/me";
// import { useSpring, animated } from "react-spring";

//静的ファイルは基本的にはpublicにいれる！！
//iconとかもpublicにいれる
//srcなどに入れる時にはimportするときなどである！

const useStyles = makeStyles({
    h1: {
        display: "flex",
        justifyContent: "center",
        marginTop: "3%",
        fontSize: "30px",
        color: "black",
        transition:"all 0.5s ease-out",
        "&:hover":{
            fontSize : "60px",
            color : "yellow",
        },
        // fontSize: enter ? "60px" : "31px" ,
        // color: enter ? "yellow" : "black",
    }
})

const Home = () => {
    const classes = useStyles();
    // const enter = useState(false)  springコンポーネントVercelでデプロイできないからむかつく
    // // const spring = useSpring({
    // //     fontSize: enter ? "60px" : "31px" ,
    // //     color: enter ? "yellow" : "black"
    // // });

    return (
        //titleに背景とコンポーネントMenuをいれたい
        <React.Fragment>
    
            <Menu />
            <div className={classes.h1}>
                ---Profile---
            </div>

            <Me />

            <div className={classes.h1}>
                ---Contact---
            </div>
           
            <Contact />
            
            <div className={classes.h1}>
                ---Skills---
            </div>

            <Button />

        </React.Fragment>
    );
}
//Typographyは言葉をいれるためのAPI
//Containerは枠組み的な要素である。
export default Home;