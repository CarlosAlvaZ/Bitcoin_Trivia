import React, { useState, useEffect, useContext } from 'react'
import oso from '../imgs/oso.jpg'
import perro from '../imgs/perro.jpg'
import play from '../imgs/play.png'
import '../css/Staging.css'
// Context
import { UserContext } from '../App'
import { Link, useNavigate } from 'react-router-dom'

export default function Staging() {
  const navigate = useNavigate()

  const state = useContext(UserContext)

  const [bolt11, setBolt11] = useState([{bolt : "", hash : ""}, {bolt : "", hash : ""}])
  const [bolt11Status, setBolt11Status] = useState([])
  const [gameId, setGameId] = useState("")

  useEffect(() => {
    fetch('http://127.0.0.1:5001/createGame').then(res => res.json())
    .then(res => {setBolt11(res.data.invoices); setGameId(res.data.id); console.log(res.data.id)}).catch(err => console.log(err))

  }, [])

  return (
    <div className='backgroundStaging'>
      <div className='column player1' style={{ opacity : !bolt11Status[0] ? "1" : "0.5" }}>
        <img src={"https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="+bolt11[0].bolt+""} className='qr'/>
        <div className='player'>
          <div className='img'>
            <img src={oso}/>
          </div>
          <input className='input' value={state.user1} onChange={e => state.setUserName1(e.target.value)}/>
        </div>
      </div>
      <div className='column player2' style={{ opacity : !bolt11Status[1] ? "1" : "0.5" }}>
        <img src={"https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl="+bolt11[1].bolt+""} className='qr'/>
        <div className='player'>
          <div className='img'>
            <img src={perro}/>
          </div>
          <input className='input' value={state.user2} onChange={e => state.setUserName2(e.target.value)}/>
        </div>
      </div>

      <div className='play'>
          <button className='playButton' onClick={() => navigate('/game')}>
            <img src={play}/>
          </button>
      </div>
    </div>
  )
}
