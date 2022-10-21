import { useEffect, useState } from 'react'

import Options from './Options'

function Question(props) {
    const [selectedOption, setSelectOption] = useState('')

    const changeSelectOption = (option) => {
        setSelectOption(option)
    }

    const [isCorrect, setIsCorrect] = useState(false)
    const checkIfSelectACorrectOption = (isCorrectValue) => {
        if (!isCorrectValue) {
            setIsCorrect(false)
        }
        if (isCorrectValue) {
            setIsCorrect(true)
        }
    }

    useEffect(() => {
        props.checkIfScore(isCorrect)
    }, [isCorrect])

    const options = props.options.map(option => {
        return (
            <Options key={option.id} 
                     text={option.text} 
                     setSelectOption={changeSelectOption}
                     checkingTheAnswer={props.checkingTheAnswer}
                     isSelected={option.text === selectedOption ? true : false}
                     isCorrect={option.isCorrect}
                     passIfCorrect={checkIfSelectACorrectOption} />
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