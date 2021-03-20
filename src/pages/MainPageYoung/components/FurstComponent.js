import React, { useState, useEffect } from 'react'
import { Container, Typography, Grid, Box } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Card from '../../../components/Card'
import axios from 'axios'

const NewMangaList = ({ title }) => {
    const [data, setData] = useState([])
    const useStyles = makeStyles({

    })

    useEffect(() => {
        axios.get('http://localhost:3000/posts').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }, [])
    // class SimpleMembership {
    //     constructor(name) {
    //         this.name = name,
    //             this.cost = 50
    //     }
    // }
    // class MediumMembership {
    //     constructor(name) {
    //         this.name = name,
    //             this.cost = 250
    //     }
    // }
    // class HiMembership {
    //     constructor(name) {
    //         this.name = name,
    //             this.cost = 500
    //     }
    // }

    // class MemberFactory {
    //     static list = {
    //         simple: SimpleMembership,
    //         medium: MediumMembership,
    //         hi: HiMembership
    //     }
    //     create(name, type = 'simple') {
    //         const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
    //     }
    // }
    return (

        <Container>

            {/* <Typography variant="h5" style={{ marginBottom: 15 }}>{title}</Typography>
            <Grid
                wrap='wrap'
                container

            >
                {data.map((item, index) => (
                    <Grid item key={index} lg={4} sm={6} md={4} xl={4} xs={12} >
                        <Card title={item.title} img={item.image} text={item.text} />
                    </Grid>
                ))}
            </Grid> */}

            frgdrgergerg

        </Container>

    )
}

export default NewMangaList