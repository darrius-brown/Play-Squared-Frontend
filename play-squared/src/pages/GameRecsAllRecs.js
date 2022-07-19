import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { getGameRecommendations } from '../service/Api'

function GameRecsAllRecs() {
  const [database, setDatabase] = useState([])
  
  function getDatabase() {
    getGameRecommendations()
    .then ((data) => {
      console.log(data)
      setDatabase(data)})
    
  }

  useEffect(() => {
    getDatabase()
  }, [])

  if (database.length <= 0) {
    return (
      <h2>Loading.....</h2>
    )
  }
  const renderGameRecs = () => { 
  return database.map((gameRec, index) => {
      return (
        <div className='game-rec' key={index}>
          <Link to={`${gameRec.pk}`} className='game-rec-title'>{gameRec.game_name}</Link>
          <p>{gameRec.description}</p>
        </div>
        )
  })
  }

    return (
        <div className='all-recs-container'>
          <header>
            <h1>All Recommendations</h1>
          </header>
          <div className='all-recs-container'>
            <div className='game-rec'>
                {renderGameRecs()}
            </div>
          </div>
        </div>
      )
}

export default GameRecsAllRecs