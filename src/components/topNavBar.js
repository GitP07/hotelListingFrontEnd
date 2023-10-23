import "./topNavBar.css";

function TopNavBar(props) {
    return (
        <div className="top-navBarDiv-container">
            <div className="back-name-cont">
                <div className="backIcon-cont" onClick={props.clickEvent}>
                    <img src={props.backIcon} alt="back-icon"></img>
                </div>
                <div className={props.clearTitle ? "hotel-historyName-cont" : "hotel-name-cont"}>
                    <p>{props.title}</p>
                </div>

            </div>
            {props.shareIcon ? <div className="sharIcon-cont">
                <img src={props.shareIcon} alt="share-icon"></img>
            </div> : ""}

            {props.clearTitle ? <div className="clearAll-text-cont">
                <p>{props.clearTitle}</p>
            </div> : ""}

        </div>
    )
}

export default TopNavBar;
