import AddFeelingButton from "./AddFeelingButton.jsx"
import AddFeelingForm from "./AddFeelingForm.jsx"

export default function Feelings(props) {

    return (
        <div className={"feelings__wrapper"}>
            <AddFeelingButton setAddFeeling={props.setAddFeeling} addFeeling={props.addFeeling} />
        </div>
    )
}