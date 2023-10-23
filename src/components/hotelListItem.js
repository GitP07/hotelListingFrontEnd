
import "./hotelListItem.css";
import Ibutton from "./iButton";

function HotelListItem(props) {
    return (
        <li className="li-list-container">
            <div className="list-box-cont" onClick={props.onRowClick}>
                <div className="hotel-detail-cont">
                    <div className="hotelImg-cont">
                        <img src={props.hotelImg} alt="hotel"></img>
                    </div>
                    <div className="hotel-info-cont">
                        <div className="hotel-name-star-info">
                            <div className="hotelList-name-cont">
                                <p>{props.hotelName}</p>
                            </div>
                            <div className="hotelList-star-cont">

                                <div className="hotel-avgReview-cont">
                                    <div className="hotelList-starIcon-cont">
                                        <img src={props.starIcon} alt="star"></img>

                                    </div>
                                    <p>{props.starNum}</p>
                                </div>
                                <div className="hotel-reviewCount-cont">
                                    <p>{props.reviewCount}</p>
                                </div>
                            </div>
                        </div>
                        <div className="hotelInfo-desc-cont">
                            {props.descCss ? <div className={props.descCss}>
                                <p>{props.hotelDesc}</p>
                            </div> : ""}
                        </div>
                        <div className="hotelList-price-btn-cont">
                            <div className="hotelList-priceOffer-cont">
                                {props.offerPercent ? <div className="hotelList-offerPer-cont">
                                    <p>{props.offerPercent}</p>
                                </div> : ""}
                                <div className="hotelListprice-cont">
                                    <p>{`Rs:${props.price}`}</p>
                                </div>
                            </div>

                            <Ibutton title={props.btnTitle} cssName="rounded-small-btn" onClickEvent={props.onBtnCkick} />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default HotelListItem;