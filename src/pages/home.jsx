import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import menu from "./menu/menu";
import button from "./button/button";
import Container from '@material-ui/core/Container';
import ButtonBase from "@material-ui/core/ButtonBase";
import Link from '@material-ui/core/Link';
import contact from "./menu/contact"

//静的ファイルは基本的にはpublicにいれる！！
//iconとかもpublicにいれる
//srcなどに入れる時にはimportするときなどである！

const useStyles = makeStyles((theme) => ({
    root: {
        width: "85vw",
        height: "900px",
        position: "relative",
        background: "#fff",
        padding: "0",
    },
    bg: {
        width: "85vw",
        height: "100%",
        backgroundImage: "url(/images/S__34168887_0.jpg)",
        backgroundSize: "cover",
        backgroundPositionY: "80%",
        opacity: "0.5",
        border: "10px groove #f0f0f0 ",
        position: "absolute",
    },
    box: {
        fontSize: "100px",
        color: "#000",
        fontFamily: "SERIF",
        marginLeft: "2%",
    },
    root2: {
        width: "85vw",
        height: "1000px",
        position: "relative",
        background: "#fff",
        padding: "0",
    },
    bg2: {
        width: "85vw",
        height: "100%",
        backgroundImage: "url(/images/S__34168918.jpg)",
        backgroundSize: "cover",
        backgroundPositionY: "60%",
        opacity: "0.5",
        border: "10px groove #f0f0f0 ",
        position: "absolute",
    },
    root3: {
        width: "85vw",
        height: "100vh",
        position: "relative",
        background: "#fff",
        padding: "0",
    },
    bg3: {
        width: "85vw",
        height: "100vh",
        background: "repeating-radial-gradient(skyblue, transparent 120px)",
        backgroundSize: "cover",
        backgroundPositionY: "50%",
        opacity: "0.5",
        border: "10px groove #f0f0f0 ",
        position: "absolute",
    },
    span: {
        textAlign: "center",
        paddingTop: "25%",
    },
    more: {
        fontSize: "40px",
        background: "repeating-radial-gradient(black, transparent 100px)",
        borderRadius: 10,
        color: "yellow",
        width: "fit-content",
        marginLeft: "46%",
        marginTop: "5%",
        padding: "1%",
    },
    more2: {
        fontSize: "40px",
        background: "repeating-radial-gradient(purple, transparent 100px)",
        borderRadius: 10,
        width: "fit-content",
        marginLeft: "46%",
        marginTop: "5%",
        padding: "1%",
    },
    h3: {
        marginTop: "10%",
    },
    h3v2: {
        width: "87vw",
        marginTop: "15%",
        textAlign: "center",
        background: "rgba(255,250,111,0.5)",
        color: "darkmagenta",
        position: "relative",
    },
    font: {
        fontSize: "25px",
        marginLeft: "5%",
        fontFamily: "serif",
        position: "relative",
    },
    font2: {
        fontSize: "30px",

    },
    button: {
        marginTop: "2%",
        marginLeft: "5%",
        marginRight: "5%",
        border: "10px groove #f0f0f0 ",
    },

}));

// const HomeIcon = (props) => {
//     return (
//         <SvgIcon {...props}>
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//         </SvgIcon>
//     );
// }

const Home = () => {
    const classes = useStyles();
    const click = React.useRef();
    const move = () => {
        window.scroll(0, 10000);
    };

    return (
        //titleに背景とコンポーネントMenuをいれたい
        <React.Fragment>
            <Typography component={menu}>
            </Typography>

            <Container className={classes.root} >
                <div className={classes.bg}
                    onMouseEnter={() => {
                        console.log("aaa")
                    }}
                    onMouseLeave={() => {
                        console.log("bbb")
                    }}
                ></div>
                <h1 className={classes.box}>
                    Mr.挫折マン
                </h1>
                <h3 className={classes.h3}>
                    <p className={classes.font}>こんにちは！</p>
                    <p className={classes.font}>獨協大学の境野です！私は平凡な人間です。</p>
                    <p className={classes.font}>なにをしてもトップを取ることはないような人間です。</p>
                    <p className={classes.font}>それはいつしかコンプレックスになるようになったのはいつ頃からでしょうか。。。</p>
                    <p className={classes.font}>このサイトで私のことを知っていただければ幸いです！</p>
                </h3>
                <ButtonBase className={classes.more} onClick={() =>
                    move(click)
                }>More</ButtonBase>
            </Container>

            <Container className={classes.root2}  >
                <div className={classes.bg2}></div>
                <h1 className={classes.box}>
                    I'm joining club in lacrosse.
                    </h1>
                <h3 className={classes.h3v2}>
                    <p className={classes.font2}>私は現在男子ラクロス部に所属しています！</p>
                    <p className={classes.font2}>最高な仲間と出会い、創部初のFinal4を目指し練習しています！</p>
                    <p className={classes.font2}>少しでも弊部の事を知ってもらえたら幸いです。</p>
                </h3>
                <ButtonBase className={classes.more2}>
                    <Link style={{ color: "yellow" }} href="https://www.dokkyo-mens-lacrosse.com/" >
                        More
                        </Link>
                </ButtonBase>
            </Container >

            <Container className={classes.root3}>
                <div className={classes.bg3}></div>
                <div className={classes.span}>
                    <Typography component={contact}></Typography>
                </div>
            </Container>

            <div className={classes.button}>

                <Typography component={button}></Typography>

            </div>

        </React.Fragment>
    );
}
//Typographyは言葉をいれるためのAPI
//Containerは枠組み的な要素である。
export default Home;