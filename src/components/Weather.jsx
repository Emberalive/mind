import temperature from '../assets/temperature.png'
import precipitation from '../assets/precipitation.png'
import ultraViolet from '../assets/ultra-violet.png'
import windSpeed from '../assets/wind-speed.png'

export default function Weather (props) {
    const weather = props.weather
    const user = props.user
    return (
        <>
            <div id={"weather-title"}>
                <p>Weather in</p>
                <p id={"weather-title__city"}>{user.city}</p>
                <p>today</p>
            </div>

            <div className="weather">
                <div className="weather-container">
                    <img src={precipitation} alt="precipitation" />
                    <p>{weather.precipitation}</p>
                </div>
                <div className="weather-container">
                    <img src={temperature} alt="weather-wind" />
                    <p>{weather.temperature}</p>
                </div>
                <div className="weather-container">
                    <img src={ultraViolet} alt="weather-wind" />
                    <p>{weather.uv}</p>

                </div>
                <div className="weather-container">
                    <img src={windSpeed} alt="weather icon" />
                    <p>{weather.windSpeed}</p>
                </div>
            </div>
        </>
    )
}