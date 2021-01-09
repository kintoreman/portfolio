import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 530,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: "rgba(255, 250, 224, 0.6)",
    },
}));

const Fxtabs = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="柔道" {...a11yProps(0)} />
                    <Tab label="水泳" {...a11yProps(1)} />
                    <Tab label="野球" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                5歳から影響で始めるが、練習がつまらなかった。
                結果は地区大会などで優勝をしていた。
      </TabPanel>
            <TabPanel value={value} index={1}>
                バタフライまで泳げれば良いでしょ。のちにプールの監視員のアルバイトするときに役立つ。
      </TabPanel>
            <TabPanel value={value} index={2}>
                幼馴染に誘われ始める。練習から楽しく、試合も楽しかった。また上手くできないことも、やりがいを感じる。
                
      </TabPanel>
        </div>
    );
}

export default Fxtabs;