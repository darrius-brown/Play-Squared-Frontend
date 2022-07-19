import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { postGameRecommendation } from '../service/Api';

function GameRecsCreate() {

  const navigate = useNavigate()

  const initialState = {
    game_name: null,
    description: null
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
    postGameRecommendation(formState)
    navigate('/gamerec/allrecs')
  }

  return (
    <div className='gamerecs-form'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Game Name' id='game-name' onChange={handleChange} defaultValue={formState.game_name} />
        <label htmlFor="Game Name">Game Name</label>
      
        <input type="text" placeholder='Description' id='description' onChange={handleChange} defaultValue={formState.description} />
        <label htmlFor="Description">Description</label>

        <button onClick={handleSubmit} className="submit-gamerec" type="submit" >Send your Game Recommendation</button>
      </form>
    </div>
  )
}

export default GameRecsCreate