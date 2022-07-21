import React, { useState, useEffect } from 'react'
import { getGameRecommendationsByID } from '../service/Api'
import { useParams } from 'react-router-dom'
import { editGameRecommendation } from '../service/Api'
import { deleteGameRecommendation } from '../service/Api'
import {useNavigate} from 'react-router-dom'

function GameRecsMyRec() {
  let { _id } = useParams()
  const navigate = useNavigate()
  const [database, setDatabase] = useState([])
  const [formState, setFormState] = useState([])

  function getDatabase() {
    getGameRecommendationsByID(_id)
    .then ((data) => {
      console.log(data)
      setDatabase(data)
      setFormState({
        game_name: data.game_name,
        description: data.description,
      })
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
    editGameRecommendation(formState, _id)
    navigate('/gamerec/allrecs')
  }
  return (
    <div className = 'game-rec'>
      <div className='game-rec-content'>
        <h1>{database.game_name}</h1>
        <p>{database.description}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Game Name' id='game_name' onChange={handleChange} defaultValue={formState.game_name} />
        <label htmlFor="Game Name">Game Name</label>
      
        <input type="text" placeholder='Description' id='description' onChange={handleChange} defaultValue={formState.description} />
        <label htmlFor="Description">Description</label>

        <button className="submit-gamerec" type="submit" >Send your Game Recommendation</button>
      </form>
      <button onClick={() => {deleteGameRecommendation(_id); navigate('/gamerec/allrecs')}}> Delete Game Recommendation</button>
    </div>
  )
}

export default GameRecsMyRec
