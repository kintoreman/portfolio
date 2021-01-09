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
                    <Tab label="部活" {...a11yProps(0)} />
                    <Tab label="学業" {...a11yProps(1)} />
                    <Tab label="進路" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                中学と比べ物にならないぐらい時間を費やした。部員も時間も質もすべて違った。
                しかし大きく成長できたのは間違えない。
      </TabPanel>
            <TabPanel value={value} index={1}>
                入学当初は下から１０番目だったが最終的には20番以内に入っていた。
      </TabPanel>
            <TabPanel value={value} index={2}>
                夢やなりたい像などがなく、漠然と決めてしまう。基準は偏差値で探した。しかし最高な進路にするのは自分だと気づき、充実している。
      </TabPanel>
        </div>
    );
}

export default Fxtabs;