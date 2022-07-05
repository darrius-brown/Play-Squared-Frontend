import React from 'react'
import { Link } from 'react-router-dom'
function GameRecsMyRec() {
  return (
    <div className='my-recs-container'>
      <header>
        <h1>My Recommendations</h1>
      </header>
      <div className='my-recs'>
        <div className='my-rec'>
          Recommendation description
          <Link to='edit'>Edit</Link>
        </div>
      </div>
    </div>
  )
}

export default GameRecsMyRec