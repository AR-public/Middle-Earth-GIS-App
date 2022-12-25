// rafce + tab will give you a default exported React Functional Component mirroring
// the file name of the file you're creating it in!!!

import React from 'react';
import { MapContainer as MC } from "react-leaflet";
import { BasemapLayer } from "react-esri-leaflet";

const MapContainer = ({ zoom, center, isHidden }) => {
    return (
        <div className={isHidden ? "hide" : ""}>
            <MC zoom={zoom} center={center}>
                <BasemapLayer name="Oceans"/>
            </MC>
        </div>
    )
}

export default MapContainer
