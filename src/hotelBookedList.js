import HotelListItem from "./components/hotelListItem";
import "./hotelBookedList.css";
import hotel3 from "./images/hotel3.jpg";
import star from "./images/Star.png";
import blackBackIcon from "./images/blackBackIcon.png";
import searchIcon from "./images/searchIcon.png";
import TopNavBar from "./components/topNavBar";
import { useNavigate } from "react-router-dom";

function HotelBookedList() {

    const navigate = useNavigate();


    return (
        <div className="bookedList-backg">
            <div className="bookedList-screen-cont">
                <div className="bookedList-view-screen">
                    <div className="bookedList-top-main-cont">
                        <div className="top-navBar-cont">
                            <TopNavBar clickEvent={() => navigate(-1)} title="Booking History" backIcon={blackBackIcon} clearTitle="CLEAR ALL" />
                        </div>

                        <div className="bookedList-search-box-cont">
                            <div className="bookedList-searchIcon-container">
                                <img src={searchIcon} alt="search-Icon"></img>
                            </div>
                            <div className="bookedList-searchInput-cont">
                                <input type="search" placeholder="Searchh Hotel"></input>
                            </div>
                        </div>

                    </div>
                    <div className="bookedList-hotel-booked-list-cont">
                        <ul>
                            <HotelListItem reviewCount="Review(200)" offerPercent="25% OFF" descCss="hotel-bookedDate-cont" hotelDesc="Booked on: 18 March 2023" hotelImg={hotel3} hotelName="Villa Tina" starNum="5" starIcon={star} price="2000" btnTitle="Book Again" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelBookedList;