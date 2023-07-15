import React, { useContext, useState, useEffect, useRef } from 'react'
import User from './User'
// context
import { UserContext } from '../App'
// Css
import '../css/QuestionLayout.css'
import Question from './Question'
import { useNavigate } from 'react-router-dom'

export default function QuestionLayout() {
  const navigate = useNavigate()
  const userData = useContext(UserContext)
  const [counter, setCounter] = useState(10)
  const currentPlayer = useRef(true)
  const currentQuestion = useRef(0)
  const [message, setMessage] = useState(false)

  useEffect(() => {
    fetch('http://127.0.0.1:7000/random/10').then(res => res.json()).then(res => userData.setQuestions(res.data)).catch(err => console.log(err))
    console.log(userData.questions)
  }, [])

  useEffect(() => {
    const interval = counter > 0 && setTimeout(() => setCounter(counter-1), 1000)
    if(counter == 0 ) {
      setMessage('TIME!')
      clearInterval(interval)
      setTimeout(() => {
        setCounter(10)
        setMessage(false)
      }, 3000)
      currentPlayer.current = !currentPlayer.current
      currentQuestion.current = currentQuestion.current + 1
    } else if (message != false) {
      clearInterval(interval)
      setTimeout(() => {
        setCounter(10)
        setMessage(false)
      }, 3000)
      currentPlayer.current = !currentPlayer.current
      currentQuestion.current = currentQuestion.current + 1
    }

    if (currentQuestion.current >= 9) {
      navigate('/pay')
    }
    return () => {
      clearInterval(interval)
    }
  }, [counter, currentPlayer])

  const handleCorrectAnswer = async () => {
    setMessage('Correct!')
  }
  
  const handleWrongAnswer = () => {
    setMessage('Wrong!')

  }

  return (
    <div className='questionLayout'>
        
        <User user={1} userName={userData.user1} userPoints={userData.u1points} enabled={currentPlayer.current}/>
        <User user={2} userName={userData.user2} userPoints={userData.u2points} enabled={!currentPlayer.current}/>

        <div className='counter'>
          <p style={{color : counter > 5 ? 'white' : 'crimson'}}>{counter}</p>
        </div>

        <Question currentQuestion={currentQuestion.current} currentPlayer={currentPlayer.current} counter={counter} handleCorrectAnswer={handleCorrectAnswer} handleWrongAnswer={handleWrongAnswer}/>

        {message != false && <div className='overlayMessage'>
          <h1>{message}</h1>
        </div> }
    </div>
  )
}
