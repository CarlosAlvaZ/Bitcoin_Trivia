import React, { useContext, useEffect, useState } from 'react'
import {UserContext} from '../App'
import oso from '../imgs/oso.jpg'
import perro from '../imgs/perro.jpg'
import '../css/Lnurl.css'

export default function LnurlView() {
  const userData = useContext(UserContext)
  const { u1points, u2points } = userData
  const [lnurl, setLnurl] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:5001/createLnurl").then(res => res.json())
    .then(res => setLnurl(res.data)).catch(err => console.log(err))
  }, [])

  return (
    <div className='background'>
        <div className='logo-banner'>
            <img src={u1points > u2points ? oso : perro}/>
        </div>
        <div className='logo-banner-shadow'></div>
        <span className='bitcoin'>{u1points > u2points ? userData.user1 : userData.user2}</span><p className='title'> Winner!</p>
        <img src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${lnurl}`} className='qr'/>
    </div>
  )
}
