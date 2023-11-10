import "./HotelRoomList.css";
import locatIcon from "./images/locationIcon.png";
import searchIcon from "./images/searchIcon.png";
import rectangleIcon from "./images/Rectangle.png";
import hotel3 from "./images/hotel3.jpg";
import star from "./images/Star.png";
import searchBlackIcon from "./images/blackSearchIcon.png";
import searchArrowIcon from "./images/searchArrow (2).png";
import { useState, useEffect, useRef} from "react";
import axios from "axios";
import HotelListItem from "./components/hotelListItem";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function HotelRoomList() {

    const [hotelInfo, setHotelInfo] = useState([]);
    const [hotelLocation, setHotelLocation] = useState([]);
    const [hotelAmenities, setHotelAmenities] = useState([]);
    const [hotelRating, setHotelRating] = useState([]);
    const [searchOption, setSearchOption] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const navigate = useNavigate();
    const [cookies, removeCookies] = useCookies([]);


    const sortCont = useRef(null);
    const SortListView = () => {
        console.log(sortCont.current.style.display);
        if (sortCont.current.style.display === "block") {
            sortCont.current.style.display = "none";
        }
        else {
            sortCont.current.style.display = "block";
        }
    }


    const bodyClick = () => {
        setHotelLocation([]);
        setHotelAmenities([]);
        setSearchOption([]);
        setHotelRating([]);

    }


    const handalHightToLowPrice = () => {
        axios.get("https://hotels-api-1035.onrender.com/highToLowPriceHotelList")
            .then((res) => {
                setHotelInfo(res.data)
            })
            .catch((err) => console.log(`Error: ${err}`))
    }

    const handalLowToHighPrice = () => {
        axios.get("https://hotels-api-1035.onrender.com/lowToHighPriceHotelList")
            .then((res) => {
                setHotelInfo(res.data)
            })
            .catch((err) => console.log(`Error: ${err}`))
    }


    useEffect(() => {
        // const verifyCookie = async () => {
        //     if (!cookies.token) {
        //         navigate('/')
        //     }

        // }
        // verifyCookie();

        axios.get("https://hotels-api-1035.onrender.com/hotelsLists", { withCredentials: true })
            .then((res) => {
                return setHotelInfo(res.data);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })



    }, [cookies, navigate, removeCookies])


    const locationList = () => {
        //Hotel Location List
        axios.post("https://hotels-api-1035.onrender.com/locationList")
            .then((res) => {
                setHotelLocation(res.data)
                console.log(`Location:${JSON.stringify(res.data)}`);
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

        axios.post("https://hotels-api-1035.onrender.com/hotelsRoomsInArea", selectedLocat, { withCredentials: true })
            .then((res) => {
                setHotelInfo(res.data)
                console.log(`selected Location hotel Info: ${JSON.stringify(res.data)}`)
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            })

    }

    //Hotel Amenities List
    const hotelAmenitiesList = () => {
        axios.post("https://hotels-api-1035.onrender.com/hotelsAmenities")
            .then((res) => {
                setHotelAmenities(res.data)
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
        axios.post("https://hotels-api-1035.onrender.com/hotelRoomsByAmenities", selectAmenities)
            .then((res) => setHotelInfo(res.data))
            .catch((error) => console.log(`Error: ${error}`))


    }
    


    const hotelRatingList = () => {
        axios.get("https://hotels-api-1035.onrender.com/hotelRatingList")
            .then((res) => {
                setHotelRating(res.data);
            })
            .catch((err) => console.log(`Error: ${err}`));
    }

    const hotelListByRating = (rating) => {
        const selectedRating = {
            hotel_rating: rating
        }
        axios.post("https://hotels-api-1035.onrender.com/hotelRoomListByRating", selectedRating)
            .then((res) => {
                setHotelInfo(res.data);
            })
            .catch((err) => console.log(`Error: ${err}`));
    }


    const handalSearchOption = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value);
        const searchOption = {
            "hotel_name": e.target.value
        }
        axios.post("https://hotels-api-1035.onrender.com/hotelSearchOptionNames", searchOption)
            .then((res) => {
                console.log(`SEARCH OPTION ${JSON.stringify(res.data)}`);
                if (res.data.message) {
                    setSearchOption("");
                }
                else {
                    setSearchOption(res.data)

                }
            })
            .catch((err) => console.log(`ERROR: ${err}`))
    }
    const handalHotelRooomList = (hotelName) => {
        console.log(`handalroomlis function`);
        axios.post("https://hotels-api-1035.onrender.com/searchHotelRoomByName/" + hotelName)
            .then((res) => {
                setHotelInfo(res.data);
            })
            .catch((err) => console.log(`Error: ${err}`))
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

                            <div className="locat-icon-cont" id="location-icon" onClick={locationList}>
                                <div className="locatIcon-img-container">
                                    <img src={locatIcon} alt="location-Icon"></img>
                                </div>
                                {
                                    hotelLocation.length !== 0 ?
                                        <div className="locat-dropdown-cont" >
                                            <ul>
                                                {
                                                    hotelLocation.map((location, index) => (
                                                        <li onClick={() => locatHotelInfo(location)} key={index}>{location}</li>
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
                                <div className="searchInput-cont" >
                                    <input type="search" placeholder="Search Hotel" name="searchBox" onChange={handalSearchOption} ></input>
                                </div>
                                <div className="search-btn-container">
                                    <input type="button" value="search" onClick={() => handalHotelRooomList(searchValue)}></input>
                                </div>


                                {
                                    searchOption !== null && searchOption.length > 0 ? (
                                        <ul className="search-Option-list-cont">

                                            {
                                                searchOption.map((hotelNames, index) => (
                                                    <li key={index} onClick={() => handalHotelRooomList(hotelNames.hotel_name)}>
                                                        <div className="searchOption-img-cont">
                                                            <img src={searchBlackIcon} alt="search-Icon"></img>
                                                        </div>
                                                        <div className="search-option-text-cont">
                                                            <p>{hotelNames.hotel_name}</p>
                                                        </div>
                                                        <div className="searchOption-arrowImg-cont">
                                                            <img src={searchArrowIcon} alt="search-Icon"></img>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>)
                                        : ""
                                }


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
                                                    hotelAmenities.map((amenities, index) => (
                                                        <li onClick={() => amenitiesHotelInfo(amenities)} key={index}>{amenities}</li>
                                                    ))

                                                }

                                            </ul>
                                        </div>
                                        : ""
                                }

                            </div>

                            <div className="filter-cont" onClick={hotelRatingList}>
                                <p>Filter by</p>
                                <img src={rectangleIcon} alt=""></img>
                                {
                                    hotelRating !== null && hotelRating.length !== 0 ?
                                        <div className="filter-dropdown">
                                            <ul>
                                                {
                                                    hotelRating.map((rating, index) => (
                                                        <li key={index} onClick={() => hotelListByRating(rating)}>Rating {rating}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        : ""
                                }

                            </div>

                            <div className="sort-cont" onClick={SortListView}>
                                <p id="sort-container"  >Sort by</p>
                                <img src={rectangleIcon} alt=""></img>
                                <div className="sort-list-dropdown" ref={sortCont}>
                                    <ul>
                                        <li onClick={handalHightToLowPrice}>High To Low price</li>
                                        <li onClick={handalLowToHighPrice}>Low To High price</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    {hotelInfo != null && hotelInfo.length > 0 ? <div className="hotelList-cont">
                        {/* hotel room list info */}
                        <ul>
                            {
                                hotelInfo.map((hotel) => (
                                    <HotelListItem
                                        hotelKey={hotel._id}
                                        offerPercent={`${Math.round((hotel.offer_price - hotel.room_price) / hotel.offer_price * 100)}% OFF`}
                                        reviewCount={`Review(${hotel.review_count})`}
                                        onRowClick={() => listClickEvent(hotel._id)}
                                        onBtnCkick={btnClickEvent}
                                        descCss="hotel-descText-cont"
                                        hotelDesc={hotel.hotel_descr}
                                        btnTitle="Book Now"
                                        hotelImg={hotel3}
                                        hotelName={hotel.hotel_name}
                                        starNum={hotel.hotel_rating}
                                        starIcon={star}
                                        price={hotel.room_price} />

                                ))
                            }
                        </ul>
                    </div> :
                        <div className="hotelEmptyList-cont">
                            <p>Hotel Rooms Are Not Available</p>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
};

export default HotelRoomList;
