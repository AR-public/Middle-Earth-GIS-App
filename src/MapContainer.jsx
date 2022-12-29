// rafce + tab will give you a default exported React Functional Component mirroring
// the file name of the file you're creating it in!!!

import React, { useEffect, useRef} from 'react';
import { Layer, Map as LeafletMap } from "leaflet";

import { vectorBasemapLayer } from "esri-leaflet-vector";
import { FeatureLayer } from 'esri-leaflet';


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
        mapController.setView(center,zoom);
  
        // Add a basemap
        vectorBasemapLayer("ArcGIS:Streets", {
          apiKey: "AAPK559a52a5414144af8f7b12d06c04ec69O_HNHAFWc31Pgl5MMcdU41b5SN8nRtxxhvgE_gYAeC5csCdw5rrSLzlRB70vb-R1", // https://developers.arcgis.com
        }).addTo(mapController);
        new FeatureLayer({url: "https://services8.arcgis.com/ZlzhoQRdJWTeuwEP/ArcGIS/rest/services/LordOfTheRingsLocations/FeatureServer/0"}).addTo(mapController);
        setMap(mapController);
      }
  
      return () => {
        if(mapRefCurrent) {
          mapRefCurrent.innerHTML = '';
        }
      }
    }, [mapRef]);

    return (
        <div className="map" ref={mapRef}></div>
    )
}


export default MapContainer
