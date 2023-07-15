import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
import '../css/Question.css'

export default function Question({ currentQuestion, currentPlayer, counter, handleCorrectAnswer, handleWrongAnswer }) {
    const userData = useContext(UserContext)
    const [currentAnswer, setCurrentAnswer] = useState(null)

    return (
        <div className='question'>
            <h1>{userData.questions[currentQuestion].question}</h1>
            <div className='answers'>
                {
                    userData.questions[currentQuestion].answers.map((answer, i) => {
                        return <div className='answer'>
                            <button key={i} onClick={e => setCurrentAnswer(i)} style={{background : currentAnswer == i ? 'var(--bitcoin-color)' : 'var(--dark-color)'}}>
                                <h2>{answer}</h2>
                            </button>
                        </div>
                    })
                }
            </div>
            <div className='send'>
                <button onClick={() => {
                    fetch('http://127.0.0.1:7000/checkAnswer', {
                        method : 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body : JSON.stringify({
                            id : userData.questions[currentQuestion].id,
                            answer : userData.questions[currentQuestion].answers[currentAnswer]
                        })
                    }).then(res => res.json()).then(res => res.data)
                    .then(res => {
                        console.log(currentPlayer, res)
                        if (res == true) {
                            if (currentPlayer == true) {
                                userData.setU1Points(prev => prev + 10 + counter)
                                handleCorrectAnswer()
                            } else if (currentPlayer == false) {
                                userData.setU2Points(prev => prev + 10 + counter)
                                handleCorrectAnswer()
                            }
                        } else {
                            handleWrongAnswer()
                        }
                    })
                    .catch(err => console.log(err))
                }}>
                    <p>Go!</p>
                </button>
            </div>
        </div>
  )
}