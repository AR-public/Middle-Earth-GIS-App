import './App.css';
import { useState } from 'react';
import { Tile } from './Tile';
import MapContainer from './MapContainer';

function App() {

  // initialising an empty array for Middle Earth locations
  const middleEarthLocation = []
  

  // putting the Middle Earth locations in useState to get the currentValue & setCurrentValue function

  const [currentMiddleEarthLocation, setMiddleEarthLocation] = useState(middleEarthLocation);
  

  // declaring a new array WITH THE Middle Earth DATA
  const middleEarthLoaded = [
    {
      name: "Mordor",
      link: "https://tolkiengateway.net/wiki/Mordor",
      imageLink: "https://tolkiengateway.net/w/images/e/e0/Ted_Nasmith_-_Across_Gorgoroth.jpg",
    },
    {
      name: "The Shire",
      link: "https://tolkiengateway.net/wiki/The_Shire",
      imageLink: "https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/m5nyctpicqm51isnut6v",
    },
    {
      name: "Fangorn Forest",
      link: "https://tolkiengateway.net/wiki/Fangorn_Forest#:~:text=Fangorn%20Forest%20was%20a%20deep,'Treebeard').",
      imageLink: "https://www.thesun.co.uk/wp-content/uploads/2019/01/NINTCHDBPICT000462134420.jpg",
    },
    {
      name: "Emyn Muil",
      link: "https://lotr.fandom.com/wiki/Emyn_Muil",
      imageLink: "https://visionofthepalantir.files.wordpress.com/2018/01/emynmuil3.jpg?w=1200",
    }
  ]

  return (
    <div className="App">
      <div className="App-header">

        <button onClick={(evt) => {(currentMiddleEarthLocation.length === 0) ? setMiddleEarthLocation(middleEarthLoaded) : setMiddleEarthLocation(middleEarthLoaded)}}> Click to load Middle Earth Locations </button>
       
          {

          }
          {(currentMiddleEarthLocation.length === 0
          ) ?
            <div>
            NO DATA
            </div>
            : <div className="tile_container">
              {middleEarthLoaded.map((location) => <Tile name={location.name} link={location.link} imageLink={location.imageLink} />)} 
              </div>
          }

              <div>
                <MapContainer zoom={5} center={[-40.848461, 174.763336]} isHidden={false}/>
              </div>
      </div>
    </div>
  );


}

export default App;
