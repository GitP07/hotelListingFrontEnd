import "./iButton.css";

function Ibutton(props) {
    return (
        <div className={props.cssName} onClick={props.onClickEvent}>

            <div className={props.titleCss ? props.titleCss : ""}>
                {props.subTitle ? [<div className="hotel-cutPrice-cont">
                    <p><s>{props.offerPrice}</s></p>
                </div>,
                <div className="hotel-offerPrice-cont">
                    <p>{props.title}</p>
                </div>] : <p>{props.title}</p>}

            </div>
            {props.subTitle ? <p>{props.subTitle}</p> : ""}
        </div>
    )
}

export default Ibutton;