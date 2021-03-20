import React from 'react'
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";

const mapData = {
    center: [67.912864, 129.690496],
    zoom: 16,
    type: 'yandex#satellite',
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

const mapStyles = {
    width: '100%',
    height: '100%'
}

export default function MapComponent() {
    return (
        <>

            <YMaps>
                <Map defaultState={mapData} style={mapStyles}>
                    {/* {coordinates.map(coordinate => <Placemark geometry={coordinate} />)} */}
                    <Polyline
                        geometry={[
                            [68.349239, 129.837012],
                            [68.243509, 129.416785]
                        ]}
                    />
                </Map>
            </YMaps>

        </>

    )
}