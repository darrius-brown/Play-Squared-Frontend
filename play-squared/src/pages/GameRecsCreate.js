import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { postGameRecommendation } from '../service/Api';

function GameRecsCreate({accessToken, userSignedIn}) {

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
    console.log(formState.game_name, formState.description)
    postGameRecommendation(formState)
  }

  return (
    <div className='gamerecs-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Game Name' id='game_name' onChange={handleChange} defaultValue={formState.game_name} />
        <label htmlFor="Game Name">Game Name</label>
      
        <input type="text" placeholder='Description' id='description' onChange={handleChange} defaultValue={formState.description} />
        <label htmlFor="Description">Description</label>

        <button className="submit-gamerec" type="submit" >Send your Game Recommendation</button>
      </form>
    </div>
  )
}

export default GameRecsCreate