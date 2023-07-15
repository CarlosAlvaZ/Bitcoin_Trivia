import React, { useState, useEffect, useContext } from 'react'
import oso from '../imgs/oso.jpg'
import perro from '../imgs/perro.jpg'
import play from '../imgs/play.png'
import '../css/Staging.css'
// Context
import { UserContext } from '../App'
import { Link } from 'react-router-dom'

export default function Staging() {

  const state = useContext(UserContext)

  return (
    <div className='backgroundStaging'>
      <div className='column player1'>
        <img src={'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+"testing"} className='qr'/>
        <div className='player'>
          <div className='img'>
            <img src={oso}/>
          </div>
          <input className='input' value={state.user1} onChange={e => state.setUserName1(e.target.value)}/>
        </div>
      </div>
      <div className='column player2'>
        <img src={'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='+"testing"} className='qr'/>
        <div className='player'>
          <div className='img'>
            <img src={perro}/>
          </div>
          <input className='input' value={state.user2} onChange={e => state.setUserName2(e.target.value)}/>
        </div>
      </div>

      <div className='play'>
        <Link to='/game'>
          <button className='playButton'>
            <img src={play}/>
          </button>
        </Link>
      </div>
    </div>
  )
}
