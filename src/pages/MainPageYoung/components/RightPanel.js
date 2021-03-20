import React, { useState } from 'react'
import Card from '../../../components/Card'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',

    },
    TextStyle: {
        color: 'rgba(255, 255, 255, 0.6)',
        marginLeft: 10,
    },
    Backround: {
        backgroundColor: '#252525',
        color: 'white',
        marginTop: 10
    }
}));

const RightPanel = ({ data, state }) => {
    const classes = useStyles()
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const getFalse = () => {
        return (
            <div className={classes.container}>
                <Box style={{ marginTop: 40, }}>
                    <Typography variant="h8" className={classes.TextStyle}>Фильтры поиска:</Typography>
                    <Paper square className={classes.Backround}>
                        <Tabs
                            value={value}
                            indicatorColor="primary"
                            onChange={handleChange}
                        >
                            <Tab label="Достопримечательности" />
                            <Tab label="Маршруты" />
                        </Tabs>
                    </Paper>
                    <Box style={{ marginTop: 20, marginBottom: 20 }}>
                        <Typography variant="h8" className={classes.TextStyle}>Результаты:</Typography>
                    </Box>
                </Box>
                <Grid
                    wrap='wrap'
                    container
                >
                    {data.map((item, index) => (
                        <Grid item key={index} lg={4} sm={6} md={4} xl={4} xs={12} >
                            <Card title={item.title} img={item.image} text={item.text} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
    const getTrue = () => {
        return (
            <div>
                eferrg
            </div>
        )
    }
    return (
        <div>
            {state ? getTrue() : getFalse()}
        </div>
    )

}

export default RightPanel