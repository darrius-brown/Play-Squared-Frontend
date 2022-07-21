// import React, {useState} from 'react'
// import {useNavigate, useParams} from 'react-router-dom'
// import {useparams} from 'react-router-dom'
// import { editGameRecommendation } from '../service/Api'
// import { getGameRecommendationsByID } from '../service/Api'

// function GameRecsEdit({accessToken, userSignedIn}) {
//     const navigate = useNavigate()

//     // const initialState = {
//     //   game_name: '',
//     //   description: '',
//     //   user_string: userSignedIn ? userSignedIn : "unknown"
//     // }
//     let { _id } = useParams()
//     const [database, setDatabase] = useState([])
  
//     function getDatabase() {
//       getGameRecommendationsByID(_id)
//       .then ((data) => {
//         setDatabase(data)})
//     }
  
//     useEffect(() => {
//       getDatabase()
//     }, [])
  
//     if (database.length <= 0) {
//       return (
//         <h2>Loading.....</h2>
//       )
//     }
  
//     const [formState, setFormState] = useState(initialState)
//     const handleChange = (event) => {
//       setFormState(
//         {
//           ...formState,
//           [event.target.id]: event.target.value
//         }
//       )
//     }
  
//     const handleSubmit = (event) => {
//       event.preventDefault()
//       editGameRecommendation(formState)
//       navigate('/gamerec/allrecs')
//     }
  
//     return (
//       <div className='gamerecs-form'>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder='Game Name' id='game_name' onChange={handleChange} defaultValue={formState.game_name} />
//           <label htmlFor="Game Name">Game Name</label>
        
//           <input type="text" placeholder='Description' id='description' onChange={handleChange} defaultValue={formState.description} />
//           <label htmlFor="Description">Description</label>
  
//           <button className="submit-gamerec" type="submit" >Send your Game Recommendation</button>
//         </form>
//       </div>
//     )
//   }

// export default GameRecsEdit