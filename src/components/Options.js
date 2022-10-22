function Options(props) {
    if (props.checkingTheAnswer) {
        if (props.isSelected && !props.isCorrect) {
            document.getElementById(props.optionId).classList.add("options-false")
        }
        if (props.isCorrect) {
            document.getElementById(props.optionId).classList.add("options-true")
        } 
    }

    const selectOption = () => {
        if (!props.checkingTheAnswer) {
            props.setSelectOption(props.text)
        }
        props.passIfCorrect(props.isCorrect)
        return;
    }

    return (
        <div onClick={selectOption}
            id = {props.optionId}
            className={props.isSelected ? "option-selected" : "options"}>
            {props.text}
        </div>
    )
}

export default Options