import React from 'react'
import { Tile } from '../Tile'

const TileContainer = ({middleEarthLoaded, isHidden, setCurrentMiddleEarthCoordinates}) => {
  return (
    <div className={(isHidden ? "hide" : "") + " tile_container"}>
      {middleEarthLoaded.map((location) => <Tile name={location.name} link={location.link} imageLink={location.imageLink} coordinates={location.coordinates} setCurrentMiddleEarthCoordinates={setCurrentMiddleEarthCoordinates}/>)}
    </div>
  )
}

export default TileContainer
