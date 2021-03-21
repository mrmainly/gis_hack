import React, { useState } from 'react'
import Card from '../../../components/Card'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { Box, TabScrollButton, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
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

const RightPanel = ({ data, setCoords, over, height }) => {
    const classes = useStyles()
    const sendCoords = (value) => {
        setCoords(value)
    };
    return (
        <div className={classes.container} style={{ overflowY: `${over}`, height: `${height}` }}>
            <Box>
                <Box style={{ marginTop: 20, marginBottom: 10 }}>
                    <Typography variant="h6" className={classes.TextStyle}>Lorem</Typography>
                </Box>
            </Box>
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
        </div>
    )

}

export default RightPanel