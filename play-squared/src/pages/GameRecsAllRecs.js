import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getGameRecommendations } from '../service/Api'

function GameRecsAllRecs() {
  const [database, setDatabase] = useState([])
  
  function getDatabase() {
    const data =  getGameRecommendations()
    setDatabase(data)
    console.log(data)
  }

  useEffect(() => {
    getDatabase()
  }, [])

  if (database.length <= 0) {
    return (
      <h2>Loading.....</h2>
    )
  }
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