function Options(props) {
    if (props.checkingTheAnswer) {
        if (props.isSelected && !props.isCorrect) {
            document.getElementById("opt").classList.add("options-false")
        }
        if (props.isCorrect) {
            document.getElementById("opt").classList.add("options-correct")
        } 
    }

    const selectOption = () => {
        if (!props.checkingTheAnswer) {
            props.setSelectOption(props.text)
            document.getElementById("opt").classList.add("option-selected")
        }
        props.passIfCorrect(props.isCorrect)
        return;
    }

    return (
        <div onClick={selectOption}
            id = "opt"
            className="options">
            {props.text}
        </div>
    )
}

export default Options