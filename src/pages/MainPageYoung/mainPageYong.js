import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import MapComponent from './components/MapComponent'
import RightPanel from './components/RightPanel'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
}));

const MainPageYoung = () => {
    const [data, setData] = useState([])
    const [state, setState] = useState(false)

    const classes = useStyles()

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then(res => setData(res.data))
    }, [])

    const leverTrue = () => {
        setState(true)
    }
    const leverFalse = () => {
        setState(false)
    }

    return (
        <Layout>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={12} lg={6} md={6} xl={6}>
                    <MapComponent />
                </Grid>
                <Grid className={classes.CardBox} item xs={12} sm={12} lg={6} md={6} xl={6} style={{ backgroundColor: '#252525' }}>
                    <RightPanel data={data} state={state} />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default MainPageYoung