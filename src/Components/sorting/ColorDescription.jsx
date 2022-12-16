import React from 'react'
import './ColorDescription.css'

const ColorDescription = ({ color, meaning }) => {
  return (
    <div className='colorMeaning'>
      <div className='colorCell' style={{backgroundColor: color}}></div>
      <p>- {meaning}</p>
    </div>
  )
}

export default ColorDescription