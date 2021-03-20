import React from 'react'
import Layout from '../../components/layout/Layout'
import FirstComponent from './components/FurstComponent'
import MapComponent from '../../components/MapComponent'

const MainPageYoung = () => {

    return (
        <Layout>
            <MapComponent />

            <FirstComponent />
        </Layout>
    )
}

export default MainPageYoung