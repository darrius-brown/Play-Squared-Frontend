import React, { useState, useEffect } from 'react'
import { getGameRecommendationsByID } from '../service/Api'
import { useParams } from 'react-router-dom'

function GameRecsView() {
  let { _id } = useParams()
  const [database, setDatabase] = useState([])

  function getDatabase() {
    getGameRecommendationsByID(_id)
    .then ((data) => {
      console.log(data)
      setDatabase(data)})
    
  }

  useEffect(() => {
    getDatabase()
  }, [])

  if (database.length <= 0) {
    return (
      <h2>Loading.....</h2>
    )
  }
  return (
    <div>
      <h1>{database.game_name}</h1>
      <p>{database.description}</p>
    </div>
  )
}

export default GameRecsView 