import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <header>
        <h1>Home Play²</h1>
      </header>
      <div className='games-container'>
        <div className='game'>
          Game Image
          <Link to='play'>Create</Link>
        </div>
      </div>
    </div>
  )
}

export default Home