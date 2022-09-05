import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardImage } from '../styled-components/styles';


function GameRecs() {
  return (
    <div className='game-recs'>
      <header>
        <h1 className='game-recs-header'>Game Recommendation² </h1>
        <Card>
          <Card.Body>Do you have ideas for a square game you'd like to see featured
            on Play²? Simply send a detailed description of your game along with
            a name of your choice and our engineers will discuss adding it to
            our library of games! Remember, we only use Squares at Play²!</Card.Body>
        </Card>
      </header>

      <div className='game-recs-container'>
        <Card style={{ width: '12rem' }}>
          <CardImage create></CardImage>
          <Card.Body>
            <Card.Title>Create²</Card.Title>
            <Card.Text>
              Create a Game Recommendation
            </Card.Text>
            <Link to='create'>
              <Button variant="primary">Create</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '12rem' }}>
          <CardImage personal></CardImage>
          <Card.Body>
            <Card.Title>My Views²</Card.Title>
            <Card.Text>
              View your Game Recommendations
            </Card.Text>
            {/* <Link to='myrecs'> */}
            <h5>Feature Currently Disabled</h5>
            {/* </Link> */}
          </Card.Body>
          
        </Card>
        <Card style={{ width: '12rem' }}>
          <CardImage all></CardImage>
          <Card.Body>
            <Card.Title>All Views²</Card.Title>
            <Card.Text>
              View all Game Recommendations
            </Card.Text>
            <Link to='allrecs'>
              <Button variant="primary">View All</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>

  )
}

export default GameRecs