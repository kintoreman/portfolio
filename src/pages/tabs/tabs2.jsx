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
                    <Tab label="減量" {...a11yProps(0)} />
                    <Tab label="部活動" {...a11yProps(1)} />
                    <Tab label="受験" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                中学１年の時に毎日練習後に家でランニングや、自重のトレーニングをして体重１０kg落とした。その後身長も伸び、３年は５kg増やせた！
      </TabPanel>
            <TabPanel value={value} index={1}>
                軟式野球部に所属した。結果は特になく終わる。３年時には縁遠かった駅伝部にも召集！！
      </TabPanel>
            <TabPanel value={value} index={2}>
                偏差値１０上の高校を受験し、意地で合格をつかみ取った。
      </TabPanel>
        </div>
    );
}

export default Fxtabs;