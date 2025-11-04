import {useEffect, useState} from 'react'
import Menu from './components/Menu.jsx';
import Weather from './components/Weather.jsx';
import './index.css';
import Pin from './components/Pin.jsx';

export default function App() {
    useEffect(() => {
        localStorage.setItem("accountCreated", "false")
        console.log("created the local storage and that")
    }, [])

    const [pinEntered, setPinEntered] = useState([]);
    const [user, setUser] = useState({
        name: "Bob",
        city: "Brighton"
    });
    const [weather, setWeather] = useState({
        precipitation: "heavy Rain",
        temperature: 20,
        uv: 30,
        windSpeed: 100
    })
  return (
    <main>
        <Menu user={user}/>
        {localStorage.getItem("accountCreated") === "true" && <>
            <Weather weather={weather}
                     user={user}/>
            <Pin/>
        </>}


    </main>
  )
}