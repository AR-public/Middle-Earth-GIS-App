import './Tile.css';
export function Tile ({ name, link, imageLink, coordinates, setCurrentMiddleEarthCoordinates }) {
    return (
        <div className="tile_element" >
            <img src={imageLink} alt="" srcset="" />
            <span>
                {name}
                {<button onClick={(evt) => {setCurrentMiddleEarthCoordinates(coordinates)}}> Go! </button>}
            </span>
        </div>
    )
}
