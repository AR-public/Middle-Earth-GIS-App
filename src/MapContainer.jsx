// rafce + tab will give you a default exported React Functional Component mirroring
// the file name of the file you're creating it in!!!

import React from 'react';
import { MapContainer } from "react-leaflet";
import { BasemapLayer, FeatureLayer } from "react-esri-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/GeoSearch";

const MapContainer = ({ zoom, center, imageLink }) => {
  return (
    <div>
      <MapContainer zoom={zoom} center={center}>
      <BasemapLayer name="DarkGray" />
      <FeatureLayer url={featureLayerURL} />
      <EsriLeafletGeoSearch useMapBounds={false} position="topright" />
    </MapContainer>
    </div>
  )
}

export default MapContainer
