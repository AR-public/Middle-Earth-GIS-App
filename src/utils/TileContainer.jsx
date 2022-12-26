import React from 'react'
import { Tile } from '../Tile'

const TileContainer = ({middleEarthLoaded}) => {
  return (
    <div className="tile_container">
      {middleEarthLoaded.map((location) => <Tile name={location.name} link={location.link} imageLink={location.imageLink} />)}
    </div>
  )
}

export default TileContainer
