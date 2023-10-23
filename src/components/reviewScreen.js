
import "./reviewScreen.css";

function ReviewScreen(props) {
    return (
        <div className="review-screen-below-cont">
            <div className="hotel-desc-cont">
                <div className="desc-title">
                    <p>HOTEL DESCRIPTION</p>
                </div>
                <div className="desc-box">
                    <p>Featuring inner courtyard views, Karas Comfy Canopy-12B GCR offers
                        accommodation with a patio and a coffee machine, around 2.9 km from
                        Surfside Beach. Boasting free private parking, the holiday home is in an area
                        where guests can engage in activities such as golfing, horse riding and canoeing. </p>
                </div>
            </div>
            <div className="hotel-facilities-cont">
                <div className="facilities-title">
                    <p>HOTEL FACILITIES</p>
                </div>
                <div className="facilities-list-cont">
                    <TileIcon icon={wifiIcon} title="Free Wifi" mainCss="facilitiesIcon-cont" iconCss=".wifiIcon-cont" />
                    <TileIcon icon={gymIcon} title="Fitness Center" mainCss="facilitiesIcon-cont" iconCss="..gymIcon-cont" />
                    <TileIcon icon={foodIcon} title="Free Breakfast" mainCss="facilitiesIcon-cont" iconCss=".wifiIcon-cont" />
                    <TileIcon icon={babyIcon} title="Kid Friendly" mainCss="facilitiesIcon-cont" iconCss=".wifiIcon-cont" />
                </div>
            </div>
            <div className="hotel-checkInOut-cont">
                <InfoIcon title="Panjim" icon={blueLocatIcon} mainCss="hotelLocat-icon-cont" innerCss="blue-locatIcon-cont" />
                <InfoIcon title="+91 8808673789" icon={contactIcon} mainCss="hotelContact-icon-cont" innerCss="blue-contactIcon-cont" />
                <div className="hotelCheckInOut-icon-cont">
                    <InfoIcon title="Checkin 12 PM" icon={checkInIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                    <InfoIcon title="Checkout 11 AM" icon={checkOutIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                </div>
            </div>
            <div className="hotel-other-facilities-cont">
                <div className="otherFacilities-item-cont">
                    <InfoIcon title="Great Dinning" icon={dinningIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                    <InfoIcon title="Pet Friendly" icon={petIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                    <InfoIcon title="Great Rooms" icon={roomIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                </div>
                <div className="otherFacilities-item-cont">
                    <InfoIcon title="Great Breakfast" icon={foodIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                    <InfoIcon title="Great Pool" icon={poolIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                    <InfoIcon title="Luxurious Vibe" icon={diamondIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="luxuriousIcon-cont" />
                </div>
            </div>
            <div className="checkAvailable-info-cont">
                <CheckInOutInfo mainCss=".check-available-cont" checkIconCss="checkInIcon-date-cont" title="CHECK AVAILABLE" />
                <div className="checkInOut-date-cont">
                    <CheckInOutInfo title="Checkin date & time" dateIcon={checkInIcon} arrowIcon={downArrowIcon} mainCss="checkIn-date-cont" checkIconCss="checkInIcon-date-cont" iconCss="checkInIcon-cont" arrowCss="downArrow-icon-cont" />
                    <CheckInOutInfo title="Checkout date & time" dateIcon={checkOutIcon} arrowIcon={downArrowIcon} mainCss="checkIn-date-cont" checkIconCss="checkInIcon-date-cont" iconCss="checkInIcon-cont" arrowCss="downArrow-icon-cont" />
                    <div className="numOfGuest-room-cont">
                        <div className="guestCategory-room-cont">
                            <div className="buildingIcon-cont">
                                <img src={buildingIcon} alt="building-icon"></img>
                            </div>
                            <div className="adult-cont">
                                <p>0 Adult</p>
                            </div>
                            <div className="children-cont">
                                <p>0 Childrens</p>
                            </div>
                            <div className="numRoom-cont">
                                <p>0 Rooms</p>
                            </div>
                        </div>
                        <div className="downArrow-icon-cont">
                            <img src={downArrowIcon} alt="downArrow-icon"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotel-foodList-cont">
                <div className="foodList-head-cont">
                    <p>FOOD</p>
                    <div className="viewAll-btn-cont">
                        <p>VIEW ALL</p>
                    </div>
                </div>
                <div className="foodList-scrollScreen-cont">
                    <FoodCont foodIcon={chickenBurger} title="Chicken Burger" />
                    <FoodCont foodIcon={vegBurger} title="Veg Burger" />
                    <FoodCont foodIcon={italiSamber} title="Itali Samber" />
                    <FoodCont foodIcon={butterChicken} title="Butter Chickenr" />
                    <FoodCont foodIcon={fishFried} title="Fried Fish" />
                    <FoodCont foodIcon={pasta} title="Pasta" />
                </div>
            </div>
            <div className="map-cont">
                <img src={mapImg} alt="map"></img>
            </div>
        </div>
    )
}

export default ReviewScreen;