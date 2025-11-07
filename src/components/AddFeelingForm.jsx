export default function AddFeelingForm (props)  {
    return (
        <div className="add-feeling-form__wrapper">
            <form className="add-feeling-form">
                <h1>Add A Mood</h1>
                <label htmlFor="mood">How do you feel?</label>
                <textarea name={"mood"} />
                <p>Choose an emoji</p>
                <div className="add-feeling-form__imoji-buttons">
                    <img alt={"emoji"} className="add-feeling-form__imoji-button" src={""}/>
                    <img alt={"emoji"} className="add-feeling-form__imoji-button" src={""}/>
                    <img alt={"emoji"} className="add-feeling-form__imoji-button" src={""}/>
                    <img alt={"emoji"} className="add-feeling-form__imoji-button" src={""}/>
                </div>
            </form>

        </div>
    )
}