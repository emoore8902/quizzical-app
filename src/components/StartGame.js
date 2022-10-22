import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import Question from './/Question'

import { decodeHtml, randomFormOptions } from '../utils/helperFunctions'

function StartGame(props) {
    const [questions, setQuestions] = useState([])
    const [checkingTheAnswer, setCheckingTheAnswer] = useState(false)
    const changeCheckingTheAnswer = () => {
        setCheckingTheAnswer(true)
    }
    const startNewGame = () => {
        setCheckingTheAnswer(false)
        props.returnToWelcomePage();
    }
    const [score, setScore] = useState(0)
    // const checkIfScore = (isCorrect) => {
    //     if (isCorrect && score < 5) {
    //         setScore(prevScore => prevScore + 1)
    //     }
    //     if (!isCorrect && score > 0) {
    //         setScore(prevScore => prevScore - 1)
    //     }
    // }

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5')
            .then(response => response.json())
            .then(data => {
                if (data.response_code === 0) {
                    const questions = data.results
                    questions.forEach(question => {
                        question.id = nanoid()
                        question.question = decodeHtml(question.question)
                        question.options = randomFormOptions(question.correct_answer, question.incorrect_answers)
                    })
                    setQuestions(questions)
                }
                return
            });
    }, [])

    const renderQuestions = questions.map(question => {
        return <Question key={question.id}
            title={question.question}
            options={question.options}
            checkingTheAnswer={checkingTheAnswer}
            //checkIfScore={checkIfScore}
            score = {score}
            setScore = {setScore} />
    });

    function NewGameButton() {
        return (
            <div className="end-game">
                <div className="end-game-score">You scored {score}/5 correct answers</div>
                <button onClick={startNewGame} className="end-game-new-game" type="button">Play again</button>
            </div>
        )
    }

    return (
        <div className="questions">
            {renderQuestions}
            <div className="questions-bottom">
                { checkingTheAnswer 
                    ? <NewGameButton />
                    : <button onClick={changeCheckingTheAnswer} className="questions-check-answer" type="button">Check answers</button>
                }
            </div>
        </div>
    )
}

export default StartGame