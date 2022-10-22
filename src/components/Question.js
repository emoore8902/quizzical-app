import { useState } from 'react'

import Options from './Options'

function Question(props) {
    const [selectedOption, setSelectOption] = useState('')

    const changeSelectOption = (option) => {
        setSelectOption(option)
    }

    // const [isCorrect, setIsCorrect] = useState(false)
    const checkIfSelectACorrectOption = (isCorrectValue) => {
        if (!isCorrectValue && props.score > 0) {
            // setIsCorrect(false)
            props.setScore(prevScore => prevScore - 1)
        }
        if (isCorrectValue && props.score < 5) {
            props.setScore(prevScore => prevScore + 1)
            // setIsCorrect(true)
        }
    }

    //  useEffect(() => {
    //      props.checkIfScore(isCorrect)
    //  }, [isCorrect])

    const options = props.options.map(option => {
        return (
            <Options key={option.id} 
                     text={option.text} 
                     setSelectOption={changeSelectOption}
                     checkingTheAnswer={props.checkingTheAnswer}
                     isSelected={option.text === selectedOption ? true : false}
                     isCorrect={option.isCorrect}
                     passIfCorrect={checkIfSelectACorrectOption}
                     optionId = {option.id}
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