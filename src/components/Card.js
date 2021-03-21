import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 290,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderBottomColor: 'blue',
        borderBottom: 2
    },
});

export default function ImgMediaCard({ img, text, title, leverTrue, leverFalse, coords, sendCoords }) {
    const [showElem, setShowElem] = useState(false)
    const classes = useStyles();
    console.log(img)

    const click = () => {
        sendCoords(coords)
    }

    return (
        <Card className={classes.root}>

            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="160"
                image={img}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" style={{ height: 55, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" style={{ backgroundColor: '#0063cc' }} onClick={click}>
                    Перейти
                    </Button>
            </CardActions>

        </Card>
    );
}