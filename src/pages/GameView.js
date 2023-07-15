import React, { useState, useEffect } from 'react'
import Counter from '../components/Counter'
import QuestionLayout from '../components/QuestionLayout'

export default function GameView() {
  const [counter, setCounter] = useState(3)

  useEffect(() => {
    const interval = counter > 0 && setTimeout(() => setCounter(counter-1), 1000)
    return () => clearInterval(interval)
  }, [counter])

  return (
      counter == 0 ? <QuestionLayout /> :
      <Counter number={counter}/>
  )
}
