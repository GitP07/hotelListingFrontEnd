import "./foodCont.css";

function FoodCont(props) {
    return (
        <div className="hotel-foodDetail-cont">
            <div className="foodImg-cont">
                <img src={props.foodIcon} alt="chicken-burger"></img>
            </div>
            <div className="foodImg-name-cont">
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default FoodCont;