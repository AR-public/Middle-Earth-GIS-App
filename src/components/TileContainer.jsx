import React from 'react'
import { Tile } from './Tile'

const TileContainer = ({middleEarthLoaded, isHidden, setCurrentMiddleEarthCoordinates}) => {
  return (
    <div className={(isHidden ? "hide" : "") + " tile_container"}>
      {middleEarthLoaded.map((location) => <Tile name={location.name} link={location.link} imageLinkME={location.imageLinkME} imageLinkNZ={location.imageLinkNZ} coordinates={location.coordinates} setCurrentMiddleEarthCoordinates={setCurrentMiddleEarthCoordinates}/>)}
    </div>
  )
}

export default TileContainer

// What .map does is that it loops through our entire 'location' array, object by object, and applies the Tile function on each of the items called.
// This reduces repetition, and it allows it to dynamically create new tiles if the 'location' array is added to.