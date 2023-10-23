import "./HotelRoomList.css";
import locatIcon from "./images/locationIcon.png";
import searchIcon from "./images/searchIcon.png";
import rectangleIcon from "./images/Rectangle.png";
import hotel3 from "./images/hotel3.jpg";
import star from "./images/Star.png";
import { useState, useEffect } from "react";
import axios from "axios";
import HotelListItem from "./components/hotelListItem";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function HotelRoomList() {

    const [hotelInfo, setHotelInfo] = useState([]);
    const [hotelLocation, setHotelLocation] = useState([]);
    const [hotelAmenities, setHotelAmenities] = useState([]);
    const navigate = useNavigate();
    const [cookies, removeCookies] = useCookies([]);

    const bodyClick = () => {
        setHotelLocation("");
        setHotelAmenities("");
    }

    useEffect(() => {
        const verifyCookie = async () => {
            console.log(`cookie token ${cookies.token}`);
            if (!cookies.token) {
                navigate('/')
            }

        }
        verifyCookie();

        axios.get("http://localhost:8080", { withCredentials: true })
            .then((res) => {
                setHotelInfo(res.data);
                console.log(`res Status ${res.status}`);
                console.log(`res data: ${JSON.stringify(res.data)}`);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })
        
        

    }, [cookies, navigate, removeCookies])


    const locationList = () => {
        //Hotel Location List
        axios.post("http://localhost:8080/locationList")
            .then((res) => {
                setHotelLocation(res.data)
                console.log(`Location:${JSON.stringify(res.data)}`);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })
    }

    const hotelAmenitiesList = () => {

        //Hotel Amenities List
        axios.post("http://localhost:8080/hotelsAmenities")
            .then((res) => {
                setHotelAmenities(res.data)
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })
    }

    //Selected Location Hotel list
    const locatHotelInfo = (location) => {
        console.log(`selectLocation:${location}`);
        const selectedLocat = {
            "hotel_address": location
        }

        axios.post("http://localhost:8080/hotelsRoomsInArea", selectedLocat, { withCredentials: true })
            .then((res) => {
                setHotelInfo(res.data)
                console.log(`selected Location hotel Info: ${JSON.stringify(res.data)}`)
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })

    }

    //Selected Amenities Hotel List
    const amenitiesHotelInfo = (amenities) => {
        console.log(`Selected Amenities ${amenities}`);

        const selectAmenities = {
            "hotel_amenities": amenities
        }
        axios.post("http://localhost:8080/hotelRoomsByAmenities", selectAmenities)
            .then((res) => setHotelInfo(res.data))
            .catch((error) => console.log(`Error: ${error}`))


    }


    const listClickEvent = (hotelId) => {
        navigate(`/hotelDetails/` + hotelId);
    }

    const btnClickEvent = (event) => {
        event.stopPropagation();
        console.log(`btn click`);
        navigate(`/hotelBookedHistory`);

    }


    return (
        <div className="backg" onClick={bodyClick}>
            <div className="Listscreen-cont">
                <div className="Listview-screen">
                    <div className="top-main-cont">
                        <div className="top-head-bar">
                            <div className="site-name-cont">
                                <p>Hotels</p>
                            </div>
                            {/** location of hotel Rooms available */}
                            <div className="locat-icon-cont" id="location-icon" onClick={locationList}>
                                <div className="locatIcon-img-container">
                                    <img src={locatIcon} alt="location-Icon"></img>
                                </div>
                                {
                                    hotelLocation.length !== 0 ?
                                        <div className="locat-dropdown-cont" >
                                            <ul>
                                                {
                                                    hotelLocation.map((location) => (
                                                        <li onClick={() => locatHotelInfo(location)}>{location}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        : ""
                                }

                            </div>
                        </div>

                        <div className="search-cont">
                            <div className="search-box-cont">
                                <div className="searchIcon-container">
                                    <img src={searchIcon} alt="search-Icon"></img>
                                </div>
                                <div className="searchInput-cont">
                                    <input type="search" placeholder="Search Hotel"></input>
                                </div>
                            </div>
                        </div>

                        <div className="roomSort-option-cont">

                            <div className="amenities-cont" onClick={hotelAmenitiesList}>
                                <p>Amenities</p>
                                <img src={rectangleIcon} alt="down arrow"></img>
                                {
                                    hotelAmenities !== "" && hotelAmenities.length !== 0 ?
                                        <div className="hotelAmenities-dropdown">
                                            <ul>

                                                {
                                                    hotelAmenities.map((amenities) => (
                                                        <li onClick={() => amenitiesHotelInfo(amenities)}>{amenities}</li>
                                                    ))

                                                }

                                            </ul>
                                        </div>
                                        : ""
                                }

                            </div>

                            <div className="filter-cont">
                                <p>Filter by</p>
                                <img src={rectangleIcon} alt=""></img>
                                <div className="filter-dropdown">
                                    <ul>
                                        <li>7 Star rating</li>
                                        <li>5 Star rating</li>
                                        <li>3 Star rating</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sort-cont">
                                <p>Sort by</p>
                                <img src={rectangleIcon} alt=""></img>
                                <div className="sort-dropdown">
                                    <ul>
                                        <li>Low To High Price</li>
                                        <li>High To Low Price</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    {hotelInfo != null ? <div className="hotelList-cont">
                        {/* hotel room list info */}
                        <ul>
                            {
                                hotelInfo.map((hotel) => (
                                    <HotelListItem 
                                    offerPercent={`${Math.round((hotel.offer_price - hotel.room_price) / hotel.offer_price * 100)}% OFF`}
                                    reviewCount={`Review(${hotel.review_count})`}
                                    onRowClick={() => listClickEvent(hotel._id)} 
                                    onBtnCkick={btnClickEvent} 
                                    descCss="hotel-descText-cont" 
                                    hotelDesc={hotel.hotel_descr}
                                    btnTitle="Book Now" hotelImg={hotel3} 
                                    hotelName={hotel.hotel_name} 
                                    starNum={hotel.hotel_rating} 
                                    starIcon={star} 
                                    price={hotel.room_price} />
                                ))
                            }
                        </ul>
                    </div> : ""}

                </div>
            </div>
        </div>
    )
};

export default HotelRoomList;