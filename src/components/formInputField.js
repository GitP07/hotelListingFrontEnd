import "./formInputField.css";

function FormInputField(props) {
  return (
    <div className="input-emailPass-cont">
      <div className={props.passIconCss ? props.passIconCss : "input-fieldIcon-cont"}>
        <img src={props.inputIcon} alt="input-icon"></img>
      </div>
      <div className="email-input-container">
        <input type={props.inputType} placeholder={props.placeHolder} name={props.inputName}></input>
      </div>
    </div>
  );
}

export default FormInputField;
