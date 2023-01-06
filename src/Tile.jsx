import './Tile.css';
export function Tile ({ name, link, imageLinkME, coordinates, setCurrentMiddleEarthCoordinates }) {
    return (
        <div className="tile_element" >
            <img className={"image"} src={imageLinkME} alt="" srcset="" draggable="false" />
            <span>
                {name}
                {<button className='button' onClick={(evt) => {setCurrentMiddleEarthCoordinates(coordinates)}}> Go! </button>}
            </span>
        </div>
    )
}
