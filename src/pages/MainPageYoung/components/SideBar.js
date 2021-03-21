import React, { useContext } from 'react'
import { Box, TabScrollButton, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { Context } from '../../../context/index'


const SideBar = ({ title, text, img, }) => {
    const { leverFalse } = useContext(Context)
    return (
        <div>
            <div>
                <IconButton>
                    <ArrowBackIcon style={{ color: 'white' }} onClick={() => {
                        leverFalse()
                    }} />
                </IconButton>
            </div>
            <img src={img} />
            <p>{title}</p>
            <p>{text}</p>
        </div>
    )
}

export default SideBar