import "./tileIcon.css"
function TileIcon(props) {
    return (
        <div className={props.mainCss}>
            <div className={props.iconCss}>
                <img src={props.icon} alt="wifi-icon"></img>
            </div>
            <div className="wifi-text-cont">
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default TileIcon; 