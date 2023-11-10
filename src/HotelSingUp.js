import { useNavigate } from "react-router-dom";
import "./HotelSingUp.css";
import FormInputField from "./components/formInputField";
import Ibutton from "./components/iButton";
import OtherSingInUp from "./components/othersSingIn_Up_btn";
import SingInUpBottomText from "./components/singInUpBottomText";
import emailIcon from "./images/emailIcon.png";
import mobileIcon from "./images/mobileNoIcon.png";
import pwdIcon from "./images/passwordIcon.png";
import userIcon from "./images/userIcon.png";
import { useEffect, useState } from "react";
import axios from "axios";

function HotelSingUp() {

    const [singUpInfo, setSingUpInfo] = useState({});
    const [registerUser, setRegisterUser] = useState(false);
    const [popUp, setPopUp] = useState("hello");
    const [displayError, setDisplayError] = useState(false);
    const navigate = useNavigate();

    const handalSingInForm = () => {
        navigate('/');
    }

    const handalSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, email, mobile_no, password } = document.forms[0];
        let errMsg = "";


        if (first_name.value === "" || last_name.value === "" || email.value === "" || mobile_no.value.length === 0 || password.value === "") {
            errMsg = "Please Fill All Fields";
            console.log(` input Error ${errMsg}`);

        }
        else if (first_name.value.length > 15) {
            errMsg = "First Name Cannot Contain More Then 14 charaters";
            console.log(` input Error ${errMsg}`);

        }
        else if (last_name.value.length > 26) {
            errMsg = "Last Name Cannot Contain More Then 25 charaters";
            console.log(` input Error ${errMsg}}`);

        }
        else if (mobile_no.value.length >= 11 || mobile_no.value.length < 10) {
            errMsg = "Mobile Number Is Invalid";
            console.log(` input Error ${errMsg}`);

        }
        else if (password.value.length < 4 || password.value.length > 9) {
            errMsg = "Password must Contain More Then 4 charaters Max 8 Charaters";
            console.log(` input Error ${errMsg}`);

        }
        else {
            setRegisterUser(true);
        }

        if (errMsg) {
            setPopUp(errMsg);
            setDisplayError(true);
            setTimeout(() => {
                setDisplayError(false)
            }, 5000);
        }

    }

    useEffect(() => {
        if(singUpInfo.message){

            if (singUpInfo.message === "User Register Sucessfully") {
                const sucessfulReg = "Registered Sucessfully";
                setPopUp(sucessfulReg);
                setDisplayError(true);
                setTimeout(() => {
                    setDisplayError(false)
                }, 5000);
    
            }
            else {
                setPopUp(singUpInfo.message);
                setDisplayError(true);
                setTimeout(() => {
                    setDisplayError(false)
                }, 5000);
            }

        }

        
    }, [singUpInfo])

    useEffect(() => {
        if (registerUser) {
            setRegisterUser(false);
            const { first_name, last_name, email, mobile_no, password } = document.forms[0];
            const newUser = {
                "first_name": first_name.value,
                "last_name": last_name.value,
                "customer_email": email.value,
                "customer_pass": password.value,
                "customer_ph": mobile_no.value
            }

            axios.post("https://hotels-api-1035.onrender.com/singUp", newUser)
                .then((res) => {
                    setSingUpInfo(res.data);
                })
                .catch((err) => console.log(`Error: ${err}`));
        }

    }, [registerUser])

    return (
        <div className="singUp-backg">
            <div className="singUp-view-screen">
                <div className="singUp-content-screen">
                    <div className="singUp-head-text">
                        <p>Sing Up</p>
                    </div>
                    <div className="singUp-inputFeilds-cont">
                        <div className="singUp-input-field-cont">
                            <form className="field-container-singup">
                                <div className="singUp-input-info-cont">
                                    <FormInputField
                                        inputType="text"
                                        inputIcon={userIcon}
                                        placeHolder="First Name"
                                        inputName="first_name"
                                    ></FormInputField>
                                </div>

                                <div className="singUp-input-info-cont">
                                    <FormInputField
                                        inputType="text"
                                        inputIcon={userIcon}
                                        placeHolder="Last Name"
                                        inputName="last_name"
                                    ></FormInputField>
                                </div>

                                <div className="singUp-input-info-cont">
                                    <FormInputField
                                        inputType="email"
                                        inputIcon={emailIcon}
                                        placeHolder="Email"
                                        inputName="email"
                                    ></FormInputField>
                                </div>

                                <div className="singUp-input-info-cont">
                                    <div className="singUp-mobile-field-cont">
                                        <div className="mobileIcon-field-cont">
                                            <img src={mobileIcon} alt="input-icon"></img>
                                        </div>
                                        <div className="input-country-code-cont">
                                            <select>
                                                <option > India +91</option>
                                                <option>UK +44</option>
                                                <option>America +1</option>
                                                <option>Dubai +971</option>
                                            </select>
                                        </div>
                                        <div className="mobileNum-input-container">
                                            <input type="tel" placeholder="Mobile No" inputMode="tel" name="mobile_no"></input>
                                        </div>
                                    </div>
                                </div>

                                <div className="singUp-input-info-cont">
                                    <FormInputField
                                        inputType="password"
                                        inputIcon={pwdIcon}
                                        placeHolder="Password"
                                        inputName="password"
                                        passIconCss= "input-field-passIcon-cont"
                                    ></FormInputField>
                                </div>
                            </form>
                            <div className="singUp-btn-container">
                                <Ibutton title="SING UP" cssName="singUp-singIn-btn" onClickEvent={handalSubmit} />
                            </div>
                            <div className="other-singUp-cont">
                                <div className="other-singUp-text-cont">
                                    <p>or sing in using</p>
                                </div>
                                <OtherSingInUp></OtherSingInUp>
                            </div>
                        </div>
                        <SingInUpBottomText title="Already have an account" titleLink="Sing In" onClickEvent={handalSingInForm}></SingInUpBottomText>
                    </div>
                    {
                        displayError ? <div className="error-msg-cont">
                            <p>{popUp}</p>
                        </div> : ""
                    }

                </div>
            </div>
        </div>
    )
}

export default HotelSingUp;