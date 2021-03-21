import React from 'react'
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";

const mapStyles = {
    width: '100%',
    height: '100%'
}

const MapComponent = (props) => {
    return (
        <>

            <YMaps>
                <Map style={mapStyles} state={{center: props.center, zoom: props.zoom}}>
                    {props.data.map(item => <Placemark geometry={item.coords}
                        modules={['geoObject.addon.balloon']}
                        properties={{
                            balloonContentHeader: item.title,
                            balloonContentBody: `
                                <img width="300" src="${item.image}" />
                                <p>${item.text}</p>
                            `
                        }}
                    />)}
                </Map>
            </YMaps>

        </>

    )
}

export default MapComponent