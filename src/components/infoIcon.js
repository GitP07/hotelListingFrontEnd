import "./infoIcon.css";

function InfoIcon(props) {
    return (
        <div className={props.mainCss}>
            <div className={props.innerCss ? props.innerCss : ""}>
                {props.icon ? <img src={props.icon} alt="icons"></img> : ""}
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default InfoIcon;