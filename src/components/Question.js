import { useState } from 'react'

import Options from './Options'

function Question(props) {
    const [selectedOption, setSelectOption] = useState('')

    const changeSelectOption = (option) => {
        setSelectOption(option)
    }

    const options = props.options.map(option => {
        return (
            <Options key={option.id} 
                     text={option.text} 
                     setSelectOption={changeSelectOption}
                     checkingTheAnswer={props.checkingTheAnswer}
                     isSelected={option.text === selectedOption ? true : false}
                     isCorrect={option.isCorrect}
                     optionId = {option.id}
                     addScore = {props.addScore}
                     />
        )
    })

    return (
        <div className="question">
            <div className="question-title">{props.title}</div>
            <div className="question-options">{options}</div>
        </div>
    )
}

export default Question