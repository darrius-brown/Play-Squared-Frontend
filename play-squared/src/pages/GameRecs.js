import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'


function GameRecs() {
  return (
    <div className='game-recs'>
      <header>
        <h1>Game Recommendation </h1>
        <h4>Do you have ideas for a square game you'd like to see featured 
          on Play²? Simply send a detailed description of your game along with 
          a name of your choice and our engineers will discuss adding it to
          our library of games! Remember, we only use Squares at Play²!
        </h4>
      </header>
      <div className='game-recs-container'>
        <div className='create'>
          Create Image
          <Link to='create'>Create</Link>
        </div>
        <div className='my-recs'>
          My Recommendation Image
          <Link to='myrecs'>My Recommendation</Link>
        </div>
        <div className='all-recs'>
          All Recommendation Image
          <Link to='allrecs'>All Recommendation</Link>
        </div>
      

      </div>
    </div>
    
  )
}

export default GameRecs