import { useNavigate } from "react-router-dom";
import "./HotelLoginForm.css";
import FormInputField from "./components/formInputField";
import Ibutton from "./components/iButton";
import OtherSingInUp from "./components/othersSingIn_Up_btn";
import SingInUpBottomText from "./components/singInUpBottomText";
import emailIcon from "./images/emailIcon.png";
import pwdIcon from "./images/passwordIcon.png";
import { useEffect, useState } from "react";
import axios from "axios";

function LoginForm() {

  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});
  const [popUp, setPopUp] = useState("");
  const [displayError, setDisplayError] = useState(false);
  const [loginUser, setLoginUser] = useState(false);

  const handalSingUpForm = () => {
    navigate('/hotelSingUpPage');
  }
 
  const handalFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = document.forms[0];
    let errMsg = "";

    if (email.value === "" || password.value === "") {
      errMsg = "Please fill all fields";
      console.log(errMsg);
    }
    else {
      setLoginUser(true);
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
    if (loginUser) {

      setLoginUser(false);
      const { email, password } = document.forms[0];
      const userLoginData = {
        customer_email: email.value,
        customer_pass: password.value
      }

      axios.post("https://hotels-api-1035.onrender.com/singIn", userLoginData, {withCredentials:  true})
        .then((res) => {
          setLoginInfo(res.data);
        })
        .catch((err) => console.log(`Error: ${err}`));

    }
  }, [loginUser])

  useEffect(() => {
    if (loginInfo.message) {
      if (loginInfo.message === "Login Sucessful") {
        const sucessfulReg = "Login Sucessful";
        setPopUp(sucessfulReg);
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false)
          navigate("/hotelRoomsList");
        }, 500);
      }
      else {
        setPopUp(loginInfo.message);
        setDisplayError(true);
        setTimeout(() => {
          setDisplayError(false)
        }, 5000);
      }
    }
  }, [loginInfo, navigate])

  return (
    <div className="login-backg">
      <div className="login-view-screen">
        <div className="login-main-screen">
          <div className="form-head-text-cont">
            <p>Sing In</p>
          </div>
          <div className="form-fields-cont">
            <form className="input-fields-btn-cont">
              <div className="email-pass-container">
                <FormInputField
                  inputType="email"
                  inputIcon={emailIcon}
                  placeHolder="Email"
                  inputName="email"
                ></FormInputField>
              </div>

              <div className="email-pass-container">
                <FormInputField
                  inputType="password"
                  inputIcon={pwdIcon}
                  placeHolder="Password"
                  inputName="password"
                  passIconCss="input-field-passIcon-cont"
                ></FormInputField>
              </div>

              <div className="forgot-pass-cont">
                <a href="/">Forgot Password?</a>
              </div>
              <div className="singIn-btn-cont">
                <Ibutton title="SING IN" cssName="singUp-singIn-btn" onClickEvent={handalFormSubmit} />
              </div>
              <div className="other-login-btn-cont">
                <div className="otherLogin-text-cont">
                  <p>or sing in using</p>
                </div>
                <OtherSingInUp></OtherSingInUp>
              </div>
            </form>
            <SingInUpBottomText  title="Dont't have any account" titleLink="Sing Up" onClickEvent={handalSingUpForm}></SingInUpBottomText>
          </div>
          {
            displayError ? <div className="login-error-msg-cont">
              <p>{popUp}</p>
            </div> : ""
          }
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
