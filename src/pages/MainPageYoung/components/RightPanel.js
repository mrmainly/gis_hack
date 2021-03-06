import React, { useEffect, useState } from 'react'
import Card from '../../../components/Card'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, TabScrollButton, IconButton, } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: 800,
        [theme.breakpoints.down('md')]: {
            height: 600,
        },
        [theme.breakpoints.down('sm')]: {
            overflowY: 'visible',
        },
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        },
    },
    TextStyle: {
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: 10,
        fontSize: 16
    },
    Backround: {
        backgroundColor: '#252525',
        color: '#fff',
        marginTop: 15
    }
}));
const RightPanel = ({ data, setCoords, over, height, routesList, setIndexArray, }) => {

    const classes = useStyles()
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const sendCoords = (value) => {
        setCoords(value)
    };
    const handleChange = (event, newValue) => {
        setValue(newValue)

        if (value === 0) {
            setIndexArray(true)
        } else {
            setIndexArray(false)
        }
        // console.log('asdasdads', value)
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const updateCoords = (value) => {
        // console.log('value: ', value)
    }

    useEffect(() => {
        console.log('asdadsasd', routesList)
    }, [])

    //

    return (
        <div>
            <Box style={{ marginTop: 20, marginLeft: 20 }}>
                {/* <Typography variant="h8" className={classes.TextStyle}>?????????????? ????????????:</Typography> */}
                <Paper square className={classes.Backround}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                    >
                        <Tab label="??????????????????????????????????????????" />
                        <Tab label="????????????????" />
                    </Tabs>
                </Paper>
                {/* <Box>
                    <Box style={{ marginTop: 20, marginBottom: 10 }}>
                        <Typography variant="h6" className={classes.TextStyle}>??????????????????:</Typography>
                    </Box>
                </Box> */}
            </Box>

            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <div className={classes.container} style={{ overflowY: `${over}`, height: `${height}` }}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid
                            wrap='wrap'
                            container
                        >
                            {data.map((item, index) => (
                                <Grid item key={index} lg={4} sm={4} md={6} xl={4} xs={12} >
                                    <Card coords={item.coords} title={item.title} img={item.image} text={item.text} sendCoords={sendCoords} id={item.id} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                </div>
                <div className={classes.container} style={{ overflowY: `${over}`, height: `${height}` }}>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Grid
                            wrap='wrap'
                            container
                        >
                            {routesList ? routesList.map((item, index) => (
                                <Grid item key={index} lg={4} sm={4} md={6} xl={4} xs={12} >
                                    <Card sendRouteCoords={updateCoords} coords={item.coords} title={item.title} img={item.image} text={item.text} id={item.id} />
                                </Grid>
                            )) : 'adsas'}
                        </Grid>
                    </TabPanel>
                </div>
            </SwipeableViews>
        </div>
    )

}

export default RightPanel