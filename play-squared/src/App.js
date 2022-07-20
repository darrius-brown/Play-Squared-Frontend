import './App.css';
import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import GameRecommendation from './pages/GameRecs';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Play from './pages/Play';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './header-footer/NavBar';
import Footer from './header-footer/Footer';
import GameRecsCreate from './pages/GameRecsCreate';
import GameRecsMyRec from './pages/GameRecsMyRec';
import GameRecsAllRecs from './pages/GameRecsAllRecs';
import GameRecsEdit from './pages/GameRecsEdit';
import GameRecsView from './pages/GameRecsView';
import Simon from './games/Simon';




function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/simon' element={<Simon/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/gamerec' element={<GameRecommendation/>}/>
        <Route path='/gamerec/allrecs' element={<GameRecsAllRecs/>}/>
        <Route path='/gamerec/:_id' element={<GameRecsView/>}/>
        {/* Lines 32-34 Subject to link change when user authentication is added */}
        <Route path='/gamerec/create' element={<GameRecsCreate/>}/>
        <Route path='/gamerec/myrecs' element={<GameRecsMyRec/>}/>
        <Route path='/gamerec/myrecs/edit' element={<GameRecsEdit/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> 
      <Footer/>
      

    </div>
  )
}

export default App;
