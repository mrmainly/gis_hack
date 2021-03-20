import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${"/Fon.png"})`,
        width: '100%',
        height: 600,
        color: 'white'
    },
}));

const BigPicture = () => {
    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <img src={'/logo1.png'} style={{ width: 300, height: 300, }} />
            <Grid item style={{ textAlign: 'center' }} lg={4} sm={6} md={4} xl={3} xs={12}>
                <Typography style={{ fontSize: 16 }} variant="h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum ac augue et suscipit. Vivamus ac tellus ut massa bibendum aliquam vitae ac diam. Aenean in enim...</Typography>
            </Grid>
            <Button variant="contained" color="primary" >
                Перейти на карты
</Button>
        </Box>
    )
}

export default BigPicture