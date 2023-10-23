import "./otherSingIn_Up_btn.css";
import Ibutton from "./iButton";

function OtherSingInUp() {
    return (
        <div className="option-btn-cont">
            <div className="facebook-google-container">
                <Ibutton title="Facebook" cssName="facebook-singIn-btn" />

            </div>
            <div className="facebook-google-container">
                <Ibutton title="Google" cssName="google-singIn-btn" />

            </div>
        </div>
    )
}

export default OtherSingInUp;