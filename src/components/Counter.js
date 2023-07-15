import React from 'react'
import '../css/Counter.css'

export default function Counter({number}) {
  return (
    <div className='overlay'>
        <p className='number'>{number}</p>
    </div>
  )
}
