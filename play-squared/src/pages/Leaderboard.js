import React, { useState, useEffect } from 'react'
import { getScore } from '../api/Api'
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
    console.log(userSignedIn)
  }, [])

  if (database.length <= 0) {
    return (
      <h2>Loading.....</h2>
    )
  }
  const renderSimonScores = () => {
    return database.map((score, index) => {
      return (
      <>
        <ListGroup.Item className='simon-score' key={index}>Score: {score.amount}  {score.board == 9 ? '3x3' : score.board == 16 ? '4x4' : '5x5'} {score.author.username} </ListGroup.Item>
      </>
      )
    })
  }

  return (
    <div className='all-recs-container'>
      <header>
        <h1>Leaderboard</h1>
      </header>
      <Card className = 'simon-leaderboard'style={{ width: '18rem' }}>
        <Card.Header>Simon 3x3</Card.Header>
        <ListGroup variant="flush">
          {renderSimonScores()}
        </ListGroup>
      </Card>
    </div>
  )
}

export default Leaderboard