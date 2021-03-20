import React from 'react'
import Layout from '../../components/layout/Layout'
import NewMangaList from './components/NewMangaList'

import MapComponent from '../../components/MapComponent'

const MainPageYoung = () => {

    return (
        <Layout>
            <NewMangaList title={"Новые главы манги"} />

            <MapComponent />
        </Layout>
    )
}

export default MainPageYoung