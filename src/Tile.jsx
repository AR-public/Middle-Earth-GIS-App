import './Tile.css';
export function Tile ({ name, link, imageLink }) {
    return (<a href={link}>
        <div className="tile_element" >
            <img src={imageLink} alt="" srcset="" />
            <span>
                {name}
            </span>
        </div>
    </a>)
}
