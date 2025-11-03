import './Tile.css';
export function Tile ({ name, link, imageLinkME, coordinates, setCurrentMiddleEarthCoordinates }) {
    return (
        <div className="tile_element" >
            <div className='OverlayText'> {name} </div>
            <img className="image" src={imageLinkME} alt="" srcset="" draggable="false" />
            <span>
                {<button className='button' onClick={(evt) => {setCurrentMiddleEarthCoordinates(coordinates)}}>
                    <span> Fly here </span> 
                </button>}
            </span>

        </div>
    )
}
