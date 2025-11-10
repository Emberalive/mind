import Angry from '../assets/angry.svg'
import Anxious from '../assets/anxious.svg'
import Detatched from '../assets/detatched.svg'
import Exhausted from '../assets/exhausted.svg'
import Scared from '../assets/scared.svg'
import Sad from '../assets/sad.svg'
import Indifferent from '../assets/indifferent.svg'
import Stressed from '../assets/stressed.svg'
import Loved from '../assets/loved.svg'
import Happy from '../assets/happy.svg'

export default function AddFeelingForm (props)  {
    return (
        <div className="add-feeling-form__wrapper">
            <form className="add-feeling-form">
                <h1>Add A Mood</h1>
                <label htmlFor="mood">How do you feel?</label>
                <textarea name={"mood"} />
                <p>Choose an emoji</p>
                <div className="add-feeling-form__imoji-buttons">
                    <div className="add-feeling-form__imoji-button__container">
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Angry}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Anxious}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Detatched}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Exhausted}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Scared}/>
                    </div>
                    <div>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Sad}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Indifferent}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Stressed}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Loved}/>
                        <img alt={"emoji"} className="add-feeling-form__imoji-button" src={Happy}/>
                    </div>
                </div>
            </form>

        </div>
    )
}