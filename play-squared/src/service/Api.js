import axios from 'axios'
// import { CREATE_MESSAGE } from ./types

export function getGameRecommendations() {
    const URL = `http://localhost:8000/gamerecs`
    return axios.get(URL)
    .then(res => {
      return res.data
    })
  }

export function postGameRecommendation(content) {
  const URL = `http://localhost:8000/gamerecs/create`
  const {game_name, description} = content 
    return axios.post(URL, {
      game_name: game_name,
      description: description,
    })
    .then(res => {
      return res.data
    })  
}

// export function postSignUp(content) {
//   const URL = `http://localhost:8000/gamerecs/create`
//   // const {firstName, lastName, email, userName, password, password} = content 
//     return axios.post(URL, {
//       game_name: game_name,
//       description: description,
//     })
//     .then(res => {
//       return res.data
//     })  
// }