import './Tile.css';
export function Tile ({ name, link, imageLink }) {
    return (
        <div className="tile_element" >
            <img src={imageLink} alt="" srcset="" />
            <span>
                {name}
            </span>
        </div>
    )
}
