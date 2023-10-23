import "./checkInInfo.css";

function CheckInOutInfo(props) {
    return (
        <div className={props.mainCss}>
            <div className={props.checkIconCss ? props.checkIconCss : ""}>
                <div className={props.iconCss ? props.iconCss : ""}>
                    {props.dateIcon ? <img src={props.dateIcon} alt="checkIn-icon"></img> : ""}
                </div>
                <p>{props.title}</p>
            </div>
            <div className={props.arrowCss ? props.arrowCss : ""}>
                {props.arrowCss ? <img src={props.arrowIcon} alt="downArrow-icon"></img> : ""}
            </div>
        </div>
    )
} 

export default CheckInOutInfo;