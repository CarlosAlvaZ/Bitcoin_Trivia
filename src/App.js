import React, {useState, createContext, useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
// Pages
import Banner from './pages/Banner';
import GameView from './pages/GameView'
import LnurlView from './pages/LnurlView'
import Staging from './pages/Staging';

export const UserContext = createContext()

function App() {
  const [userName1, setUserName1] = useState('Player1')
  const [userName2, setUserName2] = useState('Player2')
  const [questions, setQuestions] = useState([{question : "", answers : [], correctAnswer : "", dificultyLevel : 0, subject : "", id : ""}])
  const [u1points, setU1Points] = useState(0)
  const [u2points, setU2Points] = useState(0)

  useEffect(() => {
    setUserName1('Player1')
    setUserName1('Player2')
    setQuestions([{question : "", answers : [], correctAnswer : "", dificultyLevel : 0, subject : "", id : ""}])
    setU1Points(0)
    setU2Points(0)
  }, [])

  const state = {
    user1 : userName1,
    user2 : userName2,
    questions : questions,
    u1points : u1points,
    u2points : u2points,
    setUserName1 : value => setUserName1(value),
    setUserName2 : value => setUserName2(value),
    setQuestions : value => setQuestions(value),
    setU1Points : value => setU1Points(value),
    setU2Points : value => setU2Points(value)
  }

  return <UserContext.Provider value={state}>
    <Routes>
      <Route path='/' element={<Banner />}/> 
      <Route path='/staging' element={<Staging />}/>
      <Route path='/game' element={<GameView />}/>
      <Route path='/pay' element={<LnurlView />} />
    </Routes>
  </UserContext.Provider>
}

export default App;
