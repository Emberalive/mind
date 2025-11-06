
export default function CreateAccount (props) {
    function onSubmit (e) {

        const formData = new FormData(e.target);
        const fullName = formData.get("name");
        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1];
        const city = formData.get("city");

        localStorage.setItem("hasDetails", "true")
        console.log("the users detail flag has been changed to true")

        localStorage.setItem("userDetails", JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            city: city,
        }))
        console.log(JSON.stringify(localStorage.getItem("userDetails")))

        props.setUser((prevState) => ({ ...prevState, firstName: {firstName}, lastName: {lastName}, city: {city} })

        )}

    return (
        <div className="createFrom__wrapper">
            <h1 style={{textAlign: "center"}}>Welcome to Moodi</h1>
            <form className={"createForm"} onSubmit={onSubmit}>
                <p className={"createForm__title"}>Please Enter Your details</p>

                <div className="createForm_input__wrapper">
                    <label className={"createForm__label"} htmlFor="name">Full Name</label>
                    <input name={"name"} className={"createForm__input"} placeholder={"John Smith"} type="text"></input>
                </div>

                <div className="createForm_input__wrapper">
                    <label className={"createForm__label"} htmlFor="city">Home City</label>
                    <input name={"city"} className={"createForm__input"} placeholder={"Brighton"} type="text"></input>
                </div>
                <button type={"submit"} className={"createForm__button"}>Done</button>
        </form>
</div>
)
}