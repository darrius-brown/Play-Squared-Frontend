import React, { useState, useEffect } from 'react'
import { getGameRecommendationsByID } from '../api/Api'
import { useParams } from 'react-router-dom'
import { editGameRecommendation } from '../api/Api'
import { deleteGameRecommendation } from '../api/Api'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function GameRecsMyRec({ accessToken, userSignedIn }) {
  let { _id } = useParams()
  const navigate = useNavigate()
  const [database, setDatabase] = useState([])
  const [formState, setFormState] = useState([])

  function getDatabase() {
    getGameRecommendationsByID(_id, accessToken)
      .then((data) => {
        setDatabase(data)
        setFormState({
          game_name: data.game_name,
          description: data.description,
          user_string: userSignedIn ? userSignedIn : "unknown"
        })
      })
  }
  useEffect(() => {
    getDatabase()
  }, )

  if (database.length <= 0) {
    return (
      <h2>Loading.....</h2>
    )
  }

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
    console.log("hi " + accessToken)
    editGameRecommendation(formState, _id, accessToken)
    navigate('/gamerec/allrecs')
  }
  return (

    <div className='gamerecs-form'>
      <div className='game-rec-content'>
        <h1>{database.game_name}</h1>
        <h5>Edit your Game Recommendation here!</h5>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control type="text" placeholder='Game Name' id='game_name' onChange={handleChange} defaultValue={formState.game_name} />
          <Form.Label>Game Name</Form.Label>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Control type="text" placeholder='Description' id='description' onChange={handleChange} defaultValue={formState.description} />
          <Form.Label>Description</Form.Label>
        </Form.Group>

        <Button variant="success" className="submit-gamerec" type="submit" >Complete Edit</Button>

      </Form>
      <Button className = 'delete-button'variant="danger" onClick={() => { deleteGameRecommendation(_id, accessToken); navigate('/gamerec/allrecs') }}> Delete Game Recommendation</Button>
    </div>
  )

}

export default GameRecsMyRec
