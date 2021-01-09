import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import tabs1 from "./tabs/tabs1";
import tabs2 from "./tabs/tabs2";
import tabs3 from "./tabs/tabs3";
import tabs4 from "./tabs/tabs4";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        backgroundColor: "limegreen",
    },
    title: {
        fontSize: "50px",
        fontFamily: "cursive",
        margin: "0 ",
        textAlign: "center",

    },
    paper: {
        marginTop: "50px",
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        backgroundColor: "rgba(255,250,224,0.6)",
    },
    image: {
        width: 500,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const History = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>My HISTORY</h1>

            <Paper className={classes.paper}  >

                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image} >
                            <img className={classes.img} alt="小学生" src="/images/iOS の画像.jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1"> 小学生時代  </Typography>

                                <Typography variant="body2" gutterBottom> 柔道・水泳・野球を始める！！</Typography>

                                <Typography variant="body2" color="textSecondary"> 身長：１４８㎝　体重：５８㎏ </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>　俗にいう肥満児 </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1">食べるの大好き</Typography>
                        </Grid>
                        <Grid component={tabs1} />
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="中学生" src="images/iOS の画像 (4).jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1"> 中学生時代  </Typography>

                                <Typography variant="body2" gutterBottom> 肉体改造と受験</Typography>

                                <Typography variant="body2" color="textSecondary"> 身長：１６１㎝　体重：６５㎏ </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>　成長期で体重－１０kg </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1">人生の分岐点</Typography>
                        </Grid>
                        <Grid component={tabs2} />
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="高校生" src="images/iOS の画像 (1).jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1"> 高校生時代  </Typography>

                                <Typography variant="body2" gutterBottom>　進学校の高校球児 </Typography>

                                <Typography variant="body2" color="textSecondary"> 身長：１６９㎝　体重：７２㎏ </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>　ラントレって超越すると気持ちい。 </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1">文武両道</Typography>
                        </Grid>
                        <Grid component={tabs3} />
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="大学生" src="images/iOS の画像 (2).jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" color=""　> 大学生時代  </Typography>

                                <Typography variant="body2" gutterBottom>挑戦と挫折</Typography>

                                <Typography variant="body2" color="textSecondary"> 身長：１６９㎝　体重：７０㎏ </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>　ラクロス部との出会い </Typography>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Typography variant="subtitle1">なんでも挑戦可能</Typography>
                        </Grid>
                        <Grid component={tabs4} />
                    </Grid>
                </Grid>
            </Paper>



        </div>

    );
}




export default History;