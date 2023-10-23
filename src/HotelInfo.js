import "./HotelInfo.css";
import backIcon from "./images/backIcon.png";
import shareIcon from "./images/shareIcon.png";
import starIcon from "./images/Star.png";
import whiteLocatIcon from "./images/white-locationIcon.png";
import wifiIcon from "./images/wifiIcon.png";
import gymIcon from "./images/gymIcon.png";
import foodIcon from "./images/foodIcon.png";
import babyIcon from "./images/baby.png";
import contactIcon from "./images/contactIcon.png";
import checkInIcon from "./images/checkInIcon.png";
import checkOutIcon from "./images/checkOutIcon.png";
import blueLocatIcon from "./images/locationIcon.png";
import dinningIcon from "./images/diningTableIcon.png";
import petIcon from "./images/animalIcon.png";
import roomIcon from "./images/roomIcon.png";
import poolIcon from "./images/poolIcon.png";
import diamondIcon from "./images/diamonIcon.png";
import downArrowIcon from "./images/downArrowIcon.png";
import buildingIcon from "./images/buildingIcon.png";
import mapImg from "./images/mapImg.png";
import hotel1 from "./images/hotel1.jpg"

import chickenBurger from "./food images/chickenBurger.jpg";
import vegBurger from "./food images/vegBurger.jpg";
import butterChicken from "./food images/butter chicken.jpg";
import italiSamber from "./food images/itali samber.jpg";
import fishFried from "./food images/fried fish.jpg";
import pasta from "./food images/pasta.jpg";
import Ibutton from "./components/iButton";
import TileIcon from "./components/tileIcon";
import InfoIcon from "./components/infoIcon";
import CheckInOutInfo from "./components/checkInInfo";
import FoodCont from "./components/foodCont";
import TopNavBar from "./components/topNavBar";
import { useState, useEffect } from "react";
import PhotoGallary from "./components/photoGallaryItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import PriceInfoItem from "./components/priceInfoItem";


function HotelDetail() {
    const [hotelInfo, setHotelInfo] = useState({});
    const [showScreen, setShowScreen] = useState('reviewScreen');
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    const params = useParams();
    const hotelId = params.id;

    console.log(`HOTEL ID: ${hotelId}`);
    console.log(showScreen);

    const faciltyIcons = [wifiIcon, gymIcon, foodIcon, babyIcon];
    const amenityIcons = [dinningIcon, petIcon, roomIcon, foodIcon, poolIcon, diamondIcon];
    const foodIcons = [chickenBurger, vegBurger, italiSamber, butterChicken, fishFried, pasta];
    const foodNames = ["Chicken Burger", "Veg Burger", "Itali Samber", "Butter Chickenr", "Fried Fish", "Pasta"];

    const handalChangeScreenBelow = (screen) => {
        setShowScreen(screen)
    }
    const handalNavigation = () => {
        if (showScreen === "reviewScreen" || showScreen === "photoScreen" || showScreen === "nearbyScreen") {
            navigate(-1);
        }
        else if (showScreen === "booking-screen") {
            setShowScreen("reviewScreen");
        }
    }

    useEffect(() => {

        axios.post("http://localhost:8080/displayHotelRoomDetailBy/" + hotelId, { withCredentials: true })
            .then((res) => {
                console.log(`Hotel Info ${JSON.stringify(res.data)}`);
                setHotelInfo(res.data);
            })
            .catch((error) => console.log(`Error: ${error}`))

    }, [hotelId])

    const handalUserBooking = () => {
        axios.get("http://localhost:8080/loginUserData", { withCredentials: true })
            .then((res) => {
                console.log(`userDataa ${JSON.stringify(res.data)}`);
                setUserData(res.data);
            })
            .catch((error) => console.log(`Error: ${error}`))
    }


    return (
        <div className="backg">
            <div className="screen-cont">
                <div className="view-screen">
                    <div className="scrollScreen-wrap-cont">
                        <div className="hotel-imgInfo-cont">
                            <div className="upperImg-cont">
                                <TopNavBar title={hotelInfo.hotel_name} backIcon={backIcon} clickEvent={handalNavigation} shareIcon={shareIcon} />
                            </div>

                            <div className="lowerImg-cont">
                                <div className="hotelRoom-star-cont">
                                    <div className="startIcon-cont">
                                        <img src={starIcon} alt="star-icon"></img>
                                    </div>
                                    <div className="hotelRoomInfo-rating-cont">
                                        <p>{hotelInfo.hotel_rating}</p>
                                    </div>
                                    <div className="hotelInfo-review-cont">
                                        <p>Review<span>({hotelInfo.review_count})</span></p>
                                    </div>
                                </div>
                                <div className="hotel-locat-cont">
                                    <div className="locatIcon-cont">
                                        <img src={whiteLocatIcon} alt="locat-Icon"></img>
                                    </div>
                                    <div className="hotelInfo-locatName-cont">
                                        <p>{hotelInfo.hotel_address}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {
                            showScreen !== "booking-screen" ?

                                <div className="below-screen-cont">
                                    <div className="review-option-cont" onClick={() => handalChangeScreenBelow("reviewScreen")} style={showScreen === "reviewScreen" ? { backgroundColor: " #0090FF" } : {}}>
                                        <p style={showScreen === "reviewScreen" ? { color: "white" } : {}}>Review<span>({hotelInfo.review_count})</span></p>
                                    </div>
                                    <div className="photo-option-cont" onClick={() => handalChangeScreenBelow("photoScreen")} style={showScreen === "photoScreen" ? { backgroundColor: " #0090FF" } : {}}>
                                        <p style={showScreen === "photoScreen" ? { color: "white" } : {}}>Photo<span>({hotelInfo.photo_count})</span></p>
                                    </div>
                                    <div className="nearby-option-cont" onClick={() => handalChangeScreenBelow("nearbyScreen")} style={showScreen === "nearbyScreen" ? { backgroundColor: " #0090FF" } : {}}>
                                        <p style={showScreen === "nearbyScreen" ? { color: "white" } : {}}>Near by<span>({hotelInfo.nearby_count})</span></p>
                                    </div>
                                </div> : ""
                        }

                        {showScreen === "reviewScreen" ? <div className="review-screen-below-cont">
                            <div className="hotel-desc-cont">
                                <div className="desc-title">
                                    <p>HOTEL DESCRIPTION</p>
                                </div>
                                <div className="desc-box">
                                    <p>{hotelInfo.hotel_descr}</p>
                                </div>
                            </div>
                            <div className="hotel-facilities-cont">
                                <div className="facilities-title">
                                    <p>HOTEL FACILITIES</p>
                                </div>
                                <div className="facilities-list-cont">
                                    {
                                        hotelInfo.hotel_facilities != null ? hotelInfo.hotel_facilities.map((facility, index) => {
                                            return facility === "Fitness Center" ? <TileIcon icon={faciltyIcons[index]} title={facility} mainCss="facilitiesIcon-cont" iconCss="gymIcon-cont" />
                                                : <TileIcon icon={faciltyIcons[index]} title={facility} mainCss="facilitiesIcon-cont" iconCss="wifiIcon-cont" />
                                        }) : ""
                                    }
                                </div>
                            </div>
                            <div className="hotel-checkInOut-cont">
                                <InfoIcon title={hotelInfo.hotel_address} icon={blueLocatIcon} mainCss="hotelLocat-icon-cont" innerCss="blue-locatIcon-cont" />
                                <InfoIcon title={hotelInfo.hotel_contact} icon={contactIcon} mainCss="hotelContact-icon-cont" innerCss="blue-contactIcon-cont" />
                                <div className="hotelCheckInOut-icon-cont">
                                    <InfoIcon title={`Check-In ${hotelInfo.hotel_checkin}`} icon={checkInIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                                    <InfoIcon title={`Check-Out ${hotelInfo.hotel_checkout}`} icon={checkOutIcon} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                                </div>
                            </div>
                            <div className="hotel-other-facilities-cont">
                                {
                                    hotelInfo.hotel_amenities != null ? hotelInfo.hotel_amenities.map((amenity, index) => {
                                        return amenity === "Great breakfast" || amenity === "Luxurious vibe" ? <InfoIcon title={amenity} icon={amenityIcons[index]} mainCss="hotel-checkIn-checkOut-cont" innerCss="luxuriousIcon-cont" />
                                            : <InfoIcon title={amenity} icon={amenityIcons[index]} mainCss="hotel-checkIn-checkOut-cont" innerCss="checkIn-checkOut-icon-cont" />
                                    }) : ""
                                }
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
                                    {
                                        foodNames.map((food, index) => {
                                            return <FoodCont foodIcon={foodIcons[index]} title={food} />

                                        })
                                    }

                                </div>
                            </div>
                            <div className="map-cont">
                                <img src={mapImg} alt="map"></img>
                            </div>
                        </div> : ""}

                        {showScreen === "photoScreen" ? <div className="photo-screen-below-cont">
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                            <PhotoGallary hotelGallary={hotel1} />
                        </div> : ""}

                        {
                            showScreen === "booking-screen" ?

                                <div className="bookPrice-screen">
                                    <div className="price-guest-Info-cont">
                                        <div className="roomInfo-cont">
                                            <div className="roomInfo-head-cont">
                                                <p>Room Info</p>
                                            </div>
                                            <div className="roomInfo-priceInfo-cont">
                                                <PriceInfoItem title="No.of rooms" subTitle="1" ></PriceInfoItem>
                                            </div>
                                            <div className="roomInfo-priceInfo-cont">
                                                <PriceInfoItem title="Room type" subTitle="Air conditional" ></PriceInfoItem>
                                            </div>
                                            <div className="roomInfo-priceInfo-cont">
                                                <PriceInfoItem title="Room" subTitle={`3 Nights (Rs:${hotelInfo.room_price} x 3 = Rs:${hotelInfo.room_price * 3})`} ></PriceInfoItem>
                                            </div>
                                            <div className="roomInfo-priceInfo-cont">
                                                <PriceInfoItem title="Taxes" subTitle="Rs:250" ></PriceInfoItem>
                                            </div>
                                        </div>
                                        <div className="total-roomPrice-cont">
                                            <div className="total-roomPrice-sub-cont">
                                                <PriceInfoItem title="Total" subTitle={`Rs:${hotelInfo.room_price * 3 + 250}`}></PriceInfoItem>
                                            </div>
                                        </div>
                                        <div className="guest-info-cont">
                                            <div className="guestInfo-head-cont">
                                                <p>Guest Info</p>
                                            </div>
                                            <div className="guest-info-sub-cont">
                                                <PriceInfoItem title="Name" subTitle={`${userData.first_name} ${userData.last_name}`}></PriceInfoItem>
                                            </div>
                                            <div className="guest-info-sub-cont">
                                                <PriceInfoItem title="Email" subTitle={userData.customer_email}></PriceInfoItem>
                                            </div>
                                            <div className="guest-info-sub-cont">
                                                <PriceInfoItem title="Mobile No" subTitle={userData.customer_ph}></PriceInfoItem>
                                            </div>
                                        </div>
                                        <div className="promo-code-Titleinput-cont">
                                            <div className="promoCode-title-subTitle-cont">
                                                <div className="promoCode-title-cont">
                                                    <p>PROMO CODE</p>
                                                </div>
                                                <div className="promoCode-subTitle-cont">
                                                    <p>If you have promo code pleae enter it below</p>
                                                </div>
                                            </div>
                                            <div className="promoCode-input-container">
                                                <div className="promocode-main-input-cont">
                                                    <input type="text" placeholder="ENTER PROMO CODE"></input>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className="confirm-btn-cont">
                                        </div> */}
                                </div>
                                : ""
                        }
                    </div>
                    {
                        showScreen !== "booking-screen" ?
                            <div className="price-bookbtn-cont">
                                <Ibutton title={hotelInfo.room_price} cssName="hotelRoom-nightPrice-cont" subTitle="AVG/NIGTH" offerPrice={hotelInfo.offer_price} titleCss="price-cont" />
                                <Ibutton title="Book Now" cssName="hotelRoom-bookBtn-cont" onClickEvent={() => { handalChangeScreenBelow("booking-screen"); handalUserBooking(); }} />
                            </div>
                            :
                            <div className="confirm-btn-cont">
                                <div className="confirmButton-container">
                                    <Ibutton title="Confirm Order" cssName="big-round-btn" />
                                </div>
                            </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default HotelDetail;