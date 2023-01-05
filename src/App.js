import './App.css';
import { useEffect, useState } from 'react';
import MapContainer from './MapContainer';
import TileContainer from './utils/TileContainer';

function App() {
  const featureServiceURL = "https://services8.arcgis.com/ZlzhoQRdJWTeuwEP/ArcGIS/rest/services/LordOfTheRingsLocations/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token="

  const middleEarthGallery = [
    {
      name: "Mordor",
      link: "https://tolkiengateway.net/wiki/Mordor",
      imageLink: "https://tolkiengateway.net/w/images/e/e0/Ted_Nasmith_-_Across_Gorgoroth.jpg",
      coordinates: [-43.000, 175.774966],
      zoomExtent: 5
    },
    // {
    //   name: "The Shire",
    //   link: "https://tolkiengateway.net/wiki/The_Shire",
    //   imageLink: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/m5nyctpicqm51isnut6v",
    //   coordinates: [-39.012, 175.774966],
    //   zoomExtent: 2
    // },
    // {
    //   name: "Fangorn Forest",
    //   link: "https://tolkiengateway.net/wiki/Fangorn_Forest#:~:text=Fangorn%20Forest%20was%20a%20deep,'Treebeard').",
    //   imageLink: "https://www.thesun.co.uk/wp-content/uploads/2019/01/NINTCHDBPICT000462134420.jpg",
    //   coordinates: [-39.012, 175.734466],
    //   zoomExtent: 2
    // },
    // {
    //   name: "Emyn Muil",
    //   link: "https://lotr.fandom.com/wiki/Emyn_Muil",
    //   imageLink: "https://visionofthepalantir.files.wordpress.com/2018/01/emynmuil3.jpg?w=1200",
    //   coordinates: [-39.012, 175.734926],
    //   zoomExtent: 2
    // }
  ]

  const selectLocation = (coordinates) => {
    mapController.setView(coordinates, 14);
  }

  // determines whether we are in gallery mode
  // gallery mode is defined as 
  // map hidden, gallery shown.
  // if disabled, map shown, gallery hidden.
  const [isGalleryModeEnabled, setIsGalleryModeEnabled] = useState(true);
  // putting the Middle Earth locations in useState to get the currentValue & setCurrentValue function

  const [middleEarthGalleryValues, setMiddleEarthGalleryValues] = useState(middleEarthGallery);
  const [mapController, setMap] = useState();
  // declaring a new array WITH THE Middle Earth DATA


  useEffect(() => {
    fetch(featureServiceURL).then((response) => {
      response.json().then(d => {
        console.log(d);
        let cleanValues = [];
        d.features.forEach(feature => {
          // pull the attributes from the feature to this object
          cleanValues.push({
            name: feature.attributes.name,
            link: feature.attributes.link,
            imageLink: feature.attributes.imageURL,
            coordinates: [feature.geometry.y, feature.geometry.x],
          })
        })
        // const cleanValues = d.features.map(({ attributes, geometry }) => Object.assign({}, attributes, geometry)).map(({ x, y, description, imageURL, name, link }) => ({ coordinates: [y, x], description, imageLink: imageURL, name, link }));
        setMiddleEarthGalleryValues(cleanValues);
      })
      // console.log(response.data);
      // const JSONString = response.data;
      // setMiddleEarthGalleryValues(response.data);
    })
  },
    [])

  return (
    <div className="App">

      <div className="App-header">
        <h1> Middle Earth GIS </h1>
      </div>

      <div className="App-body">
        
        {/* <div className='gallery-button'>
          {<button onClick={(evt) => { (isGalleryModeEnabled) ? setIsGalleryModeEnabled(false) : setIsGalleryModeEnabled(true) }}> Click to toggle gallery/map view </button>}
        </div>
        
        {(middleEarthGalleryValues.length === 0
        ) ?
          <div>
            NO DATA
          </div>

          : */}
          <div className='Tile-grid'>
            <TileContainer middleEarthLoaded={middleEarthGalleryValues} isHidden={!isGalleryModeEnabled} setCurrentMiddleEarthCoordinates={selectLocation} />
          </div>
        {/* } */}

        <div className='Map-grid'>
          <MapContainer zoom={middleEarthGallery[0].zoomExtent} center={middleEarthGallery[0].coordinates} isHidden={isGalleryModeEnabled} setMap={setMap} />
        </div>
      </div>
    </div>
  );

}

// new useState as 'currentlyselectedlocation'
// set this as none
// when you click a tile, the tile should take the currently selected location as a property and set it from within itself

export default App;
