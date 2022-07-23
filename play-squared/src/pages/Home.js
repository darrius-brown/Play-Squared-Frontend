import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardImage } from '../styled-components/styles';

function Home() {
  return (
    // <div className='home'>
    //   <header>
    //     <h1>Play²</h1>
    //   </header>
    //   <div className='games-container'>
    //     <div className='game'>
    //       Game Image
    //       <Link to='simon'>Create</Link>
    //     </div>
    //   </div>
    // </div>
    <div className='home'>
      <Card style={{ width: '10rem' }}>
      <CardImage simon></CardImage> 
        <Card.Body>
          <Card.Title>Simon²</Card.Title>
          <Card.Text>
            Simon says with squares.
          </Card.Text>
          <Link to='simon'>
          <Button variant="primary">Play Simon²</Button>
          </Link>
        </Card.Body>
      </Card>
     </div>
    
  )
}

export default Home