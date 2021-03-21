import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, TabScrollButton, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { Context } from '../../../context/index'


const SideBar = () => {
    const { leverFalse } = useContext(Context)
    return (
        <div>
            <IconButton>
                <ArrowBackIcon style={{ color: 'white' }} onClick={() => {
                    leverFalse()
                }} />
            </IconButton>
        </div>
    )
}

export default SideBar