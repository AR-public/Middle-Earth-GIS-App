// rafce + tab will give you a default exported React Functional Component mirroring
// the file name of the file you're creating it in!!!

import React, { useEffect, useRef } from 'react';
import { Layer, Map as LeafletMap, } from "leaflet";
import * as L from "leaflet";
import MiniMap from 'leaflet-minimap';
import { vectorBasemapLayer as vectorTileLayer } from "esri-leaflet-vector";
import { FeatureLayer } from 'esri-leaflet';
import './Control.MiniMap.min.css';


const MapContainer = ({ zoom, center, isHidden, setMap }) => {
  // Create a map reference (note don't quite get how this works, and that's OK)  
  const mapRef = useRef(null);

  useEffect(() => {
    const mapRefCurrent = mapRef.current;

    if (mapRefCurrent !== null) {
      // Create a dom node to place the map in, so that cleanup is easier.
      const mapDiv = document.createElement("div");
      mapRefCurrent.appendChild(mapDiv);

      const mapController = new LeafletMap(mapDiv);
      mapController.setView(center, zoom);

      // Add a basemap
      const basemap = vectorTileLayer("343d745043fd4573bb977f41e1ea2833", {
        apiKey: "AAPK559a52a5414144af8f7b12d06c04ec69O_HNHAFWc31Pgl5MMcdU41b5SN8nRtxxhvgE_gYAeC5csCdw5rrSLzlRB70vb-R1", // https://developers.arcgis.com
        portalURL: "https://aruifioladv6qgop.maps.arcgis.com"
      });
      
      basemap.addTo(mapController);
      
      //Brown map ID: 343d745043fd4573bb977f41e1ea2833
      //Light Blue map ID: 7c77c0eda6e54a89b5fa76142c960681
      //Green map ID: 35ca11f758b74e03b10f938f3cebcd52

      // // Set minimap basemap
      const miniBasemap = vectorTileLayer("35ca11f758b74e03b10f938f3cebcd52", {
        apiKey: "AAPK559a52a5414144af8f7b12d06c04ec69O_HNHAFWc31Pgl5MMcdU41b5SN8nRtxxhvgE_gYAeC5csCdw5rrSLzlRB70vb-R1", // https://developers.arcgis.com
        portalURL: "https://aruifioladv6qgop.maps.arcgis.com"
      });

      // Set minimap
      // new L.Control.MiniMap(miniBasemap).addTo(mapController);

      // Unable to get the 'options' to work
      new MiniMap(miniBasemap, 
        {zoomLevelOffset:-8,
        toggleDisplay:true,
        zoomAnimation:true,
        }).addTo(mapController);

      const onEachFeature = (feature, layer) => {
        const popupContent = `<b>True Location:</b> ${feature.properties.trueLocation} <br><br> ${feature.properties.description} <br><br> <img src = ${feature.properties.imageURLNewZealand} width="100%" height="250px">`;
        layer.bindPopup(popupContent)
      }


      const hikerIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5606/5606682.png",
        iconCredits: <a href="https://www.flaticon.com/free-icons/jewelry" title="jewelry icons">Jewelry icons created by Luvdat - Flaticon</a>,
        iconSize: [20, 20]
      });

      // where I set my icon
      const pointToLayer = (geojson, latlng) => {
        return L.marker(latlng, {
          icon: hikerIcon
        });
      }
      const featureLayerOptions = {
        url: "https://services8.arcgis.com/ZlzhoQRdJWTeuwEP/ArcGIS/rest/services/LordOfTheRingsLocations/FeatureServer/0",
        onEachFeature,
        pointToLayer
      }

      new FeatureLayer(featureLayerOptions).addTo(mapController);
      
      // window.mFp = mapController;
      setMap(mapController);

    }


    return () => {
      if (mapRefCurrent) {
        mapRefCurrent.innerHTML = '';
      }
    }
  }, [mapRef]);

  return (
    <div className="map" ref={mapRef}></div>
  )
}

export default MapContainer

export function HomeButton({ coordinates, setCurrentMiddleEarthCoordinates }) {
  return (
    <div className="map_home">
      {<button onClick={(evt) => { setCurrentMiddleEarthCoordinates(coordinates) }}><b> Home </b></button>}
    </div>
  )
}