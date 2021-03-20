import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import MapComponent from './components/MapComponent'
import RightPanel from './components/RightPanel'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'


const MainPageYoung = () => {
    const [data, setData] = useState([])
    const [state, setState] = useState(false)

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
            <Grid container>
                <Grid item xs={6}>
                    <MapComponent />
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: '#252525' }}>
                    <RightPanel data={data} state={state} />
                </Grid>
            </Grid>
        </Layout>
    )
}

export default MainPageYoung