import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postGameRecommendation } from '../service/Api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function GameRecsCreate({ accessToken, userSignedIn }) {

  const navigate = useNavigate()

  const initialState = {
    game_name: '',
    description: '',
    user_string: userSignedIn ? userSignedIn : "unknown"
  }

  const [formState, setFormState] = useState(initialState)
  const handleChange = (event) => {
    setFormState(
      {
        ...formState,
        [event.target.id]: event.target.value
      }
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postGameRecommendation(formState, accessToken)
    navigate('/gamerec/allrecs')
  }

  return (
    <div className='gamerecs-form'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control type="text" placeholder='Game Name' id='game_name' onChange={handleChange} defaultValue={formState.game_name} />
          <Form.Label>Game Name</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control type="text" placeholder='Description' id='description' onChange={handleChange} defaultValue={formState.description} />
          <Form.Label>Description</Form.Label>
        </Form.Group>

        <Button variant="success" className="submit-gamerec" type="submit" >Send your Game Recommendation</Button>
        
      </Form>
    </div>
  )
}

export default GameRecsCreate