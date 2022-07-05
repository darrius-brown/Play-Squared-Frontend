import React from 'react'
import { Link } from 'react-router-dom'
function GameRecsAllRecs() {
    return (
        <div className='all-recs-container'>
          <header>
            <h1>All Recommendations</h1>
          </header>
          <div className='all recs'>
            <div className='all-rec'>
                Recommendation description
                <Link to='view'>View</Link>
            </div>
          </div>
        </div>
      )
}

export default GameRecsAllRecs