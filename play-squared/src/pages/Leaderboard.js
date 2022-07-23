import React, { useState, useEffect } from 'react'
import { getScore } from '../service/Api'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Leaderboard({ accessToken, userSignedIn }) {
  const [database, setDatabase] = useState([])

  function getDatabase() {
    console.log('accesstoken ' + accessToken)
    getScore(accessToken)
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
  const renderSimonScores = () => {
    return database.map((score, index) => {
      // if(score.game === 'Simon')
      return (
        <ListGroup.Item className='simon-score' key={index}>{score.amount}</ListGroup.Item>
      )
    })
  }

  return (
    <div className='all-recs-container'>
      <header>
        <h1>All Recommendations</h1>
      </header>
      <Card className = 'simon-leaderboard'style={{ width: '18rem' }}>
        <Card.Header>Simon Leaderboard</Card.Header>
        <ListGroup variant="flush">
          {renderSimonScores()}
        </ListGroup>
      </Card>
    </div>
  )
}

export default Leaderboard