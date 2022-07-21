import axios from 'axios'
// import { CREATE_MESSAGE } from ./types

export function getGameRecommendations() {
    const URL = `http://localhost:8000/gamerecs`
    return axios.get(URL)
    .then(res => {
      return res.data
    })
  }

  export function getGameRecommendationsByID(id) {
    const URL = `http://localhost:8000/gamerecs/${id}`
    return axios.get(URL)
    .then(res => {
      return res.data
    })
  }

export function postGameRecommendation(content, accessToken) {
  const URL = `http://localhost:8000/gamerecs/create`
  const headers = { 
    'Authorization': 'Bearer my-token',
};
  const {game_name, description} = content 
    return axios.post(URL, {
      game_name: game_name,
      description: description,
    }, 
    {headers})
    .then(res => {
      return res.data
    })  
}

export function editGameRecommendation(content, id, accessToken,) {
  const URL = `http://localhost:8000/gamerecs/${id}`
  console.log()
//   const headers = { 
//     'Authorization': 'Bearer my-token',
// };
  const {game_name, description} = content 
    return axios.put(URL, {
      game_name: game_name,
      description: description,
    }, 
    // {headers},
    )
    .then(res => {
      return res.data
    })  
}

export function deleteGameRecommendation(id, accessToken) {
  const URL = `http://localhost:8000/gamerecs/${id}`
  return axios.delete(URL, id)
  .then(res => {
    return res.data
  })
}

export function postSignUp(content) {
  const URL = `http://localhost:8000/gamerecs/create`
  const {firstName, lastName, email, userName, password, passwordConfirm} = content 
    return axios.post(URL, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      passwordConfirm: passwordConfirm,
    })
    .then(res => {
      return res.data
    })  
}