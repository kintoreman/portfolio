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
                    <Tab label="チャレンジ" {...a11yProps(0)} />
                    <Tab label="怪我" {...a11yProps(1)} />
                    <Tab label="考え方" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                大学に入学して、ラクロスに出会い、素敵な仲間に出会い感謝でしかない。
                そして今現在も新しいことにチャレンジをし続ける。
      </TabPanel>
            <TabPanel value={value} index={1}>
                1年次に虫垂炎。２年次に左膝靭帯断裂及び半月板の損傷。３年次には交通事故。
                間にも肉離れや、骨折なども含まれている。
      </TabPanel>
            <TabPanel value={value} index={2}>
                ラクロス部の多くの人の価値観や思考に触れ、私自身も大きく変わった。
                ポジティブかつ、現実を見極めるちからなど。
      </TabPanel>
        </div>
    );
}

export default Fxtabs;