function Options({isSelected, isCorrect, addScore, checkingTheAnswer, ...props}) {
    
    
    if (checkingTheAnswer) {
        if (isSelected && !isCorrect) {
            document.getElementById(props.optionId).classList.add("options-false")
        }
        if (isCorrect) {
            document.getElementById(props.optionId).classList.add("options-true")
        } 
        if (isSelected && isCorrect) {
            addScore()
        } 
    }

    const selectOption = () => {
        if (!checkingTheAnswer) {
            props.setSelectOption(props.text)
        }
        return;
    }

    return (
        <div onClick={selectOption}
            id = {props.optionId}
            className={isSelected ? "option-selected" : "options"}>
            {props.text}
        </div>
    )
}

export default Options