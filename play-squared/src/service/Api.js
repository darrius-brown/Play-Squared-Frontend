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

  export function getGameRecommendationsByID(id, accessToken) {
    const URL = `http://localhost:8000/gamerecs/${id}`
    const headers = { 
      'Authorization': `Bearer ${accessToken}`,
  }
    return axios.get(URL, 
      {headers})
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
    return axios.put(URL, {
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
export function getScore(accessToken) {
  const URL = `http://localhost:8000/leaderboard`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
};
  return axios.get(URL, {headers},)
  .then(res => {
    return res.data
  })
}
export function postScore(content, accessToken) {
  const URL = `http://localhost:8000/leaderboard`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
}
  const {amount} = content 
    return axios.post(URL, {
      amount: amount,
    }, 
    {headers})
    .then(res => {
      return res.data
    })  
}