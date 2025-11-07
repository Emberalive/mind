import ProfileIcon from '../assets/profile-icon.svg';

export default function Menu(props) {
    const user = props.user
    return (
        <div className={props.loggedIn ? "menu" : "menu__not-sign-in"}>
            <div className="greeting">
                <div className="logo">

                </div>
                <p>{props.loggedIn ? `Hello, ${user.firstName}` : 'Welcome to Moodi'}</p>
            </div>
            <div className="menu-items">
                {props.loggedIn && <div className="menu-item">
                    <p>{user.firstName}</p>
                    <img src={ProfileIcon} alt={"This is a profile icon"}/>
                </div>}
            </div>

        </div>
    )
}