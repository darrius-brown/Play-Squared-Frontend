import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='nav-bar'>
        <Link to='/'>
            <h5>Home</h5>
        </Link>
        <Link to='/leaderboard'>
            <h5>Leaderboard</h5>
        </Link>
        <Link to='/gamerec'>
            <h5>GameRecommendation</h5>
        </Link>
        <Link to='/about'>
           <h5>About</h5> 
        </Link>
    </div>
  )
}

export default NavBar