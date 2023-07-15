import React from 'react'
import { Link } from 'react-router-dom'
// css
import '../css/Banner.css'
import logo from '../imgs/bitcoin.jpg'

export default function Banner() {
  return (
    <div className='background'>
        <div className='logo-banner'>
            <img src={logo}/>
        </div>
        <div className='logo-banner-shadow'></div>
        <span className='bitcoin'>BITCOIN</span><p className='title'> Trivia!</p>
        <p className='description'>Online Quizzes Game</p>
        <Link to="/staging"><button className='start'>START!</button></Link>
    </div>
  )
}
