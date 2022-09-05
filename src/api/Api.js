import axios from 'axios'

export function getGameRecommendations(accessToken) {
    const URL = `https://play-squared.herokuapp.com/gamerecs`
    const headers = { 
      'Authorization': `Bearer ${accessToken}`,
  };
    return axios.get(URL, {headers},)
    .then(res => {
      return res.data
    })
  }

  export function getGameRecommendationsByID(id, accessToken) {
    const URL = `https://play-squared.herokuapp.com/gamerecs/${id}`
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
  const URL = `https://play-squared.herokuapp.com/gamerecs/`
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

export function postSignUp(content) {
  const URL = `https://play-squared.herokuapp.com/signup/`
  const {username, password} = content 
    return axios.post(URL, {
      username: username,
      password: password,
    })
    .then(res => {
      return res.data
    })  
}

export function postScore(content, accessToken) {
  const URL = `https://play-squared.herokuapp.com/leaderboard/`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
}
  const {amount, board} = content 
    return axios.post(URL, {
      game: 'Simon',
      amount: amount,
      board: board,
    }, 
    {headers})
    .then(res => {
      return res.data
    })  
}

export function editGameRecommendation(content, id, accessToken) {
  const URL = `https://play-squared.herokuapp.com/gamerecs/${id}`
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
  const URL = `https://play-squared.herokuapp.com/gamerecs/${id}/`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
}
  return axios.delete(URL, {headers}, id)
  .then(res => {
    return res.data
  })
}
export function getScore(accessToken) {
  const URL = `https://play-squared.herokuapp.com/leaderboard`
  const headers = { 
    'Authorization': `Bearer ${accessToken}`,
};
  return axios.get(URL, {headers},)
  .then(res => {
    return res.data
  })
}

// export function login(content, accessToken) {
//   const URL = `https://play-squared.herokuapp.com/api/token/`
//   const {username, password} = content 
//     return axios.post(URL, {
//       username: username,
//       password: password
//     })
//     .then(res => {
//       return res.data
//     })  
// }