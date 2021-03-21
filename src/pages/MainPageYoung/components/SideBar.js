import React, { useContext } from 'react'
import { Box, TabScrollButton, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { Context } from '../../../context/index'


const SideBar = ({ title, text, img, setVideo }) => {
    const { leverFalse } = useContext(Context)

    const showVideo = () => {
        setVideo(true)
    }

    return (
        <div>
            <div>
                <IconButton>
                    <ArrowBackIcon style={{ color: 'white' }} onClick={() => {
                        leverFalse()
                    }} />
                </IconButton>
            </div>

            <div class="place-single">
                <img src={img} />
                <p class="place-single__title">{title}</p>
                <p>{text}</p>

                <p>
                    <button class="btn" onClick={showVideo}>Посмотреть видео</button>
                </p>
            </div>
            
        </div>
    )
}

export default SideBar