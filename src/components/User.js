import React, { useContext } from 'react'
import oso from '../imgs/oso.jpg'
import perro from '../imgs/perro.jpg'
import '../css/User.css'
import { UserContext } from '../App'

export default function User({ userName, user, enabled }) {
  const userData = useContext(UserContext)
  return (<div className={user == 1 ? 'user1' : 'user2'} style={{ opacity : enabled ? 1 : 0.5 }}>
    <div className='icon'>
        <img src={ user == 1 ? oso : perro} />
    </div>
    <div className='data'>
        <div className='userName'>
            <p>{userName}</p>
        </div>
        <div className='points' style={{width : user == 1 ? `${userData.u1points * 2 + 20}px` : `${userData.u2points + 20}px`}}></div>
        <p className='pointsText'>{user == 1 ? userData.u1points : userData.u2points}</p>
    </div>
  </div>
  )
}