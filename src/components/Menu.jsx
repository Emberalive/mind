import ProfileIcon from '../assets/profile-icon.svg';


export default function Menu(props) {
    const user = props.user
    return (
        <div className="menu">
            <div className="greeting">
                <div className="logo">

                </div>
                <p>Hello, {user.fullName}</p>
            </div>
            <div className="menu-items">
                <div className="menu-item">
                    <p>{user.fullName}</p>
                    <img src={ProfileIcon} alt={"This is a profile icon"}/>
                </div>
            </div>

        </div>
    )
}