import React from 'react'
import { Tile } from '../Tile'

const TileContainer = ({middleEarthLoaded, isHidden}) => {
  return (
    <div className={(isHidden ? "hide" : "") + " tile_container"}>
      {middleEarthLoaded.map((location) => <Tile name={location.name} link={location.link} imageLink={location.imageLink}  />)}
    </div>
  )
}

export default TileContainer
