import React from 'react'
import Layout from '../../components/layout/Layout'
import NewMangaList from './components/NewMangaList'

const MainPageYoung = () => {

    return (
        <Layout>
            <NewMangaList title={"Новые главы манги"} />
        </Layout>
    )
}

export default MainPageYoung