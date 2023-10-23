import "./singInUpBottomText.css";

function SingInUpBottomText(props) {
    return (
        <div className="bottom-fields-cont">
            <div className="bottom-box-text-cont">
                <p>by creating an account you agree to our <span onClick={props.onClickTerms}>Terms</span></p>
            </div>
            <div className="bottom-box-text-cont">
                <p>{props.title} <span onClick={props.onClickEvent}>{props.titleLink}</span></p>
            </div>
        </div>
    )
}

export default SingInUpBottomText;