import "./priceInfoItem.css";

function PriceInfoItem(props){
    return(
        <div className="priceInfo-main-cont">
            <div className="typeOf-info-cont">
                <p>{props.title}</p>
            </div>
            <div className={props.title === "Total" ? "total-priceInfo-container" : "type-price-info-cont"}>
                <p>{props.subTitle}</p>
            </div>
        </div>
    )
}

export default PriceInfoItem;