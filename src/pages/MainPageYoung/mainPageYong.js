import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import MapComponent from './components/MapComponent'
import RightPanel from './components/RightPanel'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { Context } from '../../context/index'
import SideBar from './components/SideBar'

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
    const [sideData, setSideData] = useState([])

    const [mapCenter, setMapCenter] = useState([67.792508, 129.868496])
    const [mapZoom, setMapZoom] = useState(9)

    const classes = useStyles()

    // let mapCenter = [67.792508, 129.868496]

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then(res => setData(res.data))
    }, [])

    const leverTrue = (id) => {
        setState(true)
        setSideData(data.find((el) => {
            return id == el.id
        }))
        console.log(data)
    }
    const leverFalse = () => {
        setState(false)
    }

    const updateMapCenter = (value) => {
        setMapCenter(value)
        setMapZoom(11)
    }


    return (
        <Context.Provider value={{ leverTrue, leverFalse }}>
            <Layout>
                <Grid container className={classes.container}>
                    <Grid item xs={12} sm={12} lg={6} md={6} xl={6}>
                        <MapComponent data={data} center={mapCenter} zoom={mapZoom} />
                    </Grid>
                    <Grid className={classes.CardBox} item xs={12} sm={12} lg={6} md={6} xl={6} style={{ backgroundColor: '#252525' }}>
                        {state ? <SideBar title={sideData.title} img={sideData.image} text={sideData.text} /> :
                            <RightPanel data={data} state={state} setCoords={updateMapCenter} over={'scroll'} height={'800'} />}
                    </Grid>
                </Grid>
            </Layout>
        </Context.Provider>
    )
}

export default MainPageYoung