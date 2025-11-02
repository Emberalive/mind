export default function Pin () {
    return (
        <div className="pin-wrapper">
            <div className="pin">
                <p>Please Enter Your Pin</p>
                <div className="indicator-container">
                    <div className="indicator">
                    </div>
                    <div className="indicator">
                    </div>
                    <div className="indicator">
                    </div>
                    <div className="indicator">
                    </div>
                </div>
                <div className="pin-row">
                    <div className="pin-button"><p>1</p></div>
                    <div className="pin-button"><p>2</p></div>
                    <div className="pin-button"><p>3</p></div>
                </div>
                <div className="pin-row">
                    <div className="pin-button"><p>4</p></div>
                    <div className="pin-button"><p>5</p></div>
                    <div className="pin-button"><p>6</p></div>
                </div>
                <div className="pin-row">
                    <div className="pin-button"><p>7</p></div>
                    <div className="pin-button"><p>8</p></div>
                    <div className="pin-button"><p>9</p></div>
                </div>
                <div className="pin-row">
                    <div className="pin-button"><p>0</p></div>
                </div>
            </div>
        </div>
    )
}