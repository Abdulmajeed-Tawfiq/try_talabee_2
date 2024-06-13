import React from 'react'
import './BombBtn.scss'

const BombBtn = () => {
  
  return (
    <div className='BombBtn'>
      <div className="container-button" >
        <div className="hover bt-1" />
        <div className="hover bt-2" />
        <div className="hover bt-3" />
        <div className="hover bt-4" />
        <div className="hover bt-5" />
        <div className="hover bt-6" />
        <button data-text={"15% off"}   />
      </div>
    </div>
  )
}

export default BombBtn