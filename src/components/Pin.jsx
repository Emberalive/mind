import {useState,  useEffect} from "react";

export default function Pin (props) {
    const [count, setCount] = useState(0);
    const indicators = [1, 2, 3, 4]
    const [pinEntered, setPinEntered] = useState([]);

    useEffect(() => {
        console.log(`Count: ${count}, Pin Entered: ${pinEntered.join('')}`);
    }, [count, pinEntered]);

    function onPinClick (value) {
        if (count !== 4) {
            setCount(count + 1)
            setPinEntered((prevState) => [...prevState, value])
        } //else do nothing
    }
    function onBackClick () {
        if (count !== 0) {
            setCount(count - 1)
            setPinEntered((prevState) => prevState.slice(0, -1))
        }//else do nothing
    }

    function submitPin () {
        console.log("Starting pin submission")
        if (pinEntered.length !== 4) {
            console.log("The pin is not the correct length")
            return
        }

        if (localStorage.getItem("hasPin") === "false") {
            console.log("User has no account, Creation of account started")
            localStorage.setItem("hasPin", "true")
            props.setHasPin(true)
            localStorage.setItem("pin", JSON.stringify(pinEntered))
            if (localStorage.getItem("pin") !== null) {
                localStorage.setItem("accountCreated", "true")
                console.log("account created set to true: " + JSON.stringify(localStorage.getItem("accountCreated")) )
                props.setAccountCreated(true)
                props.setLoggedIn(true)
            }
        } else {
            console.log("User has account, allowing user to log in")

            const savedPin = localStorage.getItem("pin")

            console.log('saved pin:', savedPin)
            console.log('pin Entered:', JSON.stringify(pinEntered))

            if (JSON.stringify(pinEntered) === savedPin) {
                props.setLoggedIn(prevState => !prevState)
            } else {
                console.log("Pin is not the same, user not logged in")
            }
        }
    }

    const indicatorList = indicators.map((item, index) => (
        <div className={count >= item ? "indicator indicator__filled" : "indicator"} key={index}>
        </div>
    ))
    return (
        <div className="pin-wrapper">
            <div className="pin">
                <p>{props.hasPin === false ? "please create a pin" : "Please Enter Your Pin"}</p>
                <div className="indicator-container">
                    {indicatorList}
                </div>
                <div className="pin-row">
                    <div className="pin-button" onClick={() => onPinClick(1)}><p>1</p></div>
                    <div className="pin-button" onClick={() => onPinClick(2)}><p>2</p></div>
                    <div className="pin-button" onClick={() => onPinClick(3)}><p>3</p></div>
                </div>
                <div className="pin-row">
                    <div className="pin-button" onClick={() => onPinClick(4)}><p>4</p></div>
                    <div className="pin-button" onClick={() => onPinClick(5)}><p>5</p></div>
                    <div className="pin-button" onClick={() => onPinClick(6)}><p>6</p></div>
                </div>
                <div className="pin-row">
                    <div className="pin-button" onClick={() => onPinClick(7)}><p>7</p></div>
                    <div className="pin-button" onClick={() => onPinClick(8)}><p>8</p></div>
                    <div className="pin-button" onClick={() => onPinClick(9)}><p>9</p></div>
                </div>
                <div className="pin-row">
                    <div className={"pin-button"}  onClick={() => onBackClick()}><p>BACK</p></div>
                    <div className="pin-button" onClick={() => onPinClick(0)}><p>0</p></div>
                    <div className="pin-button" onClick={() => submitPin()} ><p>OK</p></div>
                </div>
            </div>
        </div>
    )
}