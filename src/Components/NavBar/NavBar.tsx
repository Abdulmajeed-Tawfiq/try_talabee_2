import React from 'react'
import MidBar from './MidBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

const NavBar = () => {
  return (
    <div>
      <TopBar />
      <div className='FnBar'>
        <MidBar />
        <BottomBar />
      </div>
    </div>
  )
}

export default NavBar