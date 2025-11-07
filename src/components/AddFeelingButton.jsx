export default function AddFeelingButton(props) {
    function addFeelingClick () {
        console.log("Displaying addFeeling form")
        props.setAddFeeling(prevState => !prevState);
    }
    return (
        <div className={"add-feeling__button"} onClick={() => addFeelingClick()}>
            <p>Add A Mood</p>
        </div>
    )
}