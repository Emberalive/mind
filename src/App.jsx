import {useEffect, useState} from 'react'
import Menu from './components/Menu.jsx';
import Weather from './components/Weather.jsx';
import './index.css';
import Pin from './components/Pin.jsx';
import CreateAccount from './components/CreateAccount.jsx';

export default function App() {

    const [accountCreated, setAccountCreated] = useState(
        localStorage.getItem("accountCreated") === "true"
    );
    const [hasDetails, setHasDetails] = useState(
        localStorage.getItem("hasDetails") === "true"
    );
    const [hasPin, setHasPin] = useState(
        localStorage.getItem("hasPin") === "true"
    );
    const [loggedIn, setLoggedIn] = useState(false);

    const [user, setUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem("accountCreated") === null) {
            localStorage.setItem("accountCreated", "false");
            console.log("accountCreated set as false");
        }

        if (localStorage.getItem("hasDetails") === null) {
            localStorage.setItem("hasDetails", "false");
        }

        if (localStorage.getItem("hasPin") === null) {
            localStorage.setItem("hasPin", "false");
        }

        console.log("Initialized local storage only if not already set");
    }, []);

    useEffect(() => {
        localStorage.setItem("accountCreated", "false");

        localStorage.setItem("hasDetails", "false");

        localStorage.setItem("hasPin", "false");

        console.log("Initialized local storage only if not already set");
    }, []);


    const [pinEntered, setPinEntered] = useState([]);

    const [weather, setWeather] = useState({
        precipitation: "heavy Rain",
        temperature: 20,
        uv: 30,
        windSpeed: 100
    })
  return (
    <main>
        {accountCreated === true && <>
            <Menu user={user}/>
            <Weather weather={weather}
                     user={user}/>
            {loggedIn === false && <Pin/>}
        </>}
        {hasDetails === false && <>
            <CreateAccount user={user} setUser={setUser} />
        </>}
        {(hasDetails === true && hasPin === false) && <>
            <Pin hasPin={hasPin} setHasPin={setHasPin}
                 accountCreated={accountCreated}
                 setAccountCreated={setAccountCreated}
                 loggedIn={loggedIn}
                 setLoggedIn={setLoggedIn}
            />
        </>}

    </main>
  )
}