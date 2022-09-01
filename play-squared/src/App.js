import './App.css';
import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import GameRecommendation from './pages/GameRecs';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import SignIn from './Forms/SignIn';
import SignUp from './Forms/SignUp';
import NavBar from './header-footer/NavBar';
import Footer from './header-footer/Footer';
import GameRecsCreate from './pages/GameRecsCreate';
import GameRecsMyRec from './pages/GameRecsMyRec';
import GameRecsAllRecs from './pages/GameRecsAllRecs';
import Simon from './games/Simon';
import Squares from './games/Squares';
import Signout from './Forms/Signout';





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
        <Route path='/simon' element={<Simon userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        <Route path='/squares' element={<Squares userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        <Route path='/leaderboard' element={<Leaderboard userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        <Route path='/gamerec' element={<GameRecommendation/>}/>
        <Route path='/gamerec/allrecs' element={<GameRecsAllRecs userSignedIn={userSignedIn} accessToken={accessToken}/>} />
        <Route path='/gamerec/:_id' element={<GameRecsMyRec userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        {/* Lines 32-34 Subject to link change when user authentication is added */}
        <Route path='/gamerec/create' element={<GameRecsCreate userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        <Route path='/gamerec/myrecs' element={<GameRecsMyRec userSignedIn={userSignedIn} accessToken={accessToken}/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> 
      <Footer/>
      

    </div>
  )
}

export default App;
