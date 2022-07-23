import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getGameRecommendations } from '../service/Api'
import Card from 'react-bootstrap/Card';

function GameRecsAllRecs({ accessToken }) {
  const [database, setDatabase] = useState([])

  function getDatabase() {
    console.log('accesstoken ' + accessToken)
    getGameRecommendations(accessToken)
      .then((data) => {
        setDatabase(data)
      })

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
        // 
        //   {gameRec.game_name}
        //   <p>{gameRec.description}</p>
        // 
        <div className='game-rec' key={index}>
          <Link to={`/gamerec/${gameRec.pk}`} className='game-rec-title'>
            <Card>
              <Card.Header>Game Name: {gameRec.game_name}</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {gameRec.description}
                  </p>
                  <footer className="blockquote-footer">
                    Username
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Link>
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