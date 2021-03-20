import React, { useEffect, useContext, useState } from 'react'
import Layout from '../../components/layout/Layout'
import BigPicture from './component/BigPicture'
import SidePanel from '../MainPageYoung/components/RightPanel'
import { Context } from '../../context/index'
import { Box, Grid, GridListTileBar } from '@material-ui/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#252525'
    },
}));

const HomePage = () => {
    const classes = useStyles()
    // const { user } = useContext(Context);
    // useEffect(() => {
    //     console.log('we user', user)
    // }, [user])
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then(res => setData(res.data))
    }, [])
    return (
        <Layout>

            <BigPicture />
            <Box className={classes.container}>
                <Grid item lg={6} sm={8} md={8} xl={6} xs={9}>
                    <SidePanel data={data} />
                </Grid>
            </Box>
        </Layout>
    )
}

export default HomePage