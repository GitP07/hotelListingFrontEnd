import "./photoGallaryItem.css";

function PhotoGallary(props) {
    return (
        <div className="hotel-photo-cont">
            <div className="hotel-gallary-img">
                <img src={props.hotelGallary} alt="hotel"></img>
            </div>
        </div>
    )
}

export default PhotoGallary;