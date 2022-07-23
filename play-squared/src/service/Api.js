import axios from 'axios'
// import { CREATE_MESSAGE } from ./types

export function getGameRecommendations(accessToken) {
    const URL = `http://localhost:8000/gamerecs`
    const headers = { 
      'Authorization': `Bearer ${accessToken}`,
  };
    return axios.get(URL, {headers},)
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
    'Authorization': `Bearer ${accessToken}`,
}
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

export function editGameRecommendation(content, id, accessToken) {
  const URL = `http://localhost:8000/gamerecs/${id}`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
};
  const {game_name, description} = content 
    return axios.put(URL, {headers}, {
      game_name: game_name,
      description: description,
    }, 
    {headers},
    )
    .then(res => {
      return res.data
    })  
}

export function deleteGameRecommendation(id, accessToken) {
  const URL = `http://localhost:8000/gamerecs/${id}`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
}
  return axios.delete(URL, {headers}, id)
  .then(res => {
    return res.data
  })
}
