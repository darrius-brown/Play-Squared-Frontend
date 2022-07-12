import axios from 'axios'

export function getGameRecommendations() {
    const URL = `http://localhost:8000/gamerecs`
    return axios.get(URL)
    .then(res => {
      return res.data
    })
  }