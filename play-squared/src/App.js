import './App.css';
import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import GameRecommendation from './pages/GameRecs';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './header-footer/NavBar';
import Footer from './header-footer/Footer';
import GameRecsCreate from './pages/GameRecsCreate';
import GameRecsMyRec from './pages/GameRecsMyRec';
import GameRecsAllRecs from './pages/GameRecsAllRecs';
import Simon from './games/Simon';
import Signout from './service/Signout';





function App() {
  const [userSignedIn, setUserSignedIn] = useState(localStorage.getItem('user'))

  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))
  return (
    <div className = 'app'>
      <NavBar/>
      <Routes>
        <Route path='/signin' element={<SignIn setUserSignedIn={setUserSignedIn} setAccessToken={setAccessToken}/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signout' element={<Signout setUserSignedIn={setUserSignedIn} setAccessToken={setAccessToken}/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/simon' element={<Simon/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/gamerec' element={<GameRecommendation/>}/>
        <Route path='/gamerec/allrecs' element={<GameRecsAllRecs userSignedIn={userSignedIn} accessToken={accessToken}/>} />
        <Route path='/gamerec/:_id' element={<GameRecsMyRec userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        {/* Lines 32-34 Subject to link change when user authentication is added */}
        <Route path='/gamerec/create' element={<GameRecsCreate/>}/>
        <Route path='/gamerec/myrecs' element={<GameRecsMyRec/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> 
      <Footer/>
      

    </div>
  )
}

export default App;
