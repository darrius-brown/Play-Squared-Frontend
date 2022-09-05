import React from 'react'
import Board from '../games/Board'
import Simon from '../games/Simon'

function Play() {
  return (
    <div className='play-container'>
      <header>
        
        <h1>Play Play²</h1>
      </header>
      <div>
        {/* <Board/> */}
        <Simon/>
        
      </div>
    </div>
  )
}

export default Play