const api_key = "168b64dea1322732910d8dbf34ca002b"
const Api_url = `https://api.openweathermap.org/data/2.5/weather?lat=50.83&lon=-0.17&units=metric&appid=${api_key}`
const city = "brighton";

async function getWeather () {
    const response = await fetch (Api_url)
    if (response.ok) {
        const resData = await response.json()
        console.log(`This is weather data: \n${JSON.stringify(resData)}`)
    }
}

//NOTE:
//Time is in UTC UNIX time (seconds) need to convert to Date object js uses milliseconds so * by 1000

//wind speed and gust is in meters/second

//clouds is percent of visibility 0 - 100

async function getLocation () {
    const response = await fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit={limit}&appid=&${api_key}`);
    if (response.ok) {
        const resData = await response.json()
        console.log(`\nThis is geo Data: \n${JSON.stringify(resData)}`)
    }
}

// getWeather ()
getLocation()
