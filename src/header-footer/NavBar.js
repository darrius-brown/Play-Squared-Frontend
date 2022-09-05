import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function NavBar(userSignedIn, accessToken) {
   console.log({userSignedIn})
  return (
     <Navbar bg="dark" variant="dark">
     <Container>
       <Navbar.Brand className='navbar-play'>Play²</Navbar.Brand>
       <Nav className="me-auto">
       
       {/* <Nav.Link>
         <Link className={userSignedIn.accessToken  ? 'hidden' : ''} to='/signin' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>Sign in</h5>
         </Link>
         </Nav.Link>
         <Nav.Link>
         <Link className={userSignedIn.accessToken ? '' : 'hidden'} to='/signout' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>Sign Out</h5>
         </Link>
         </Nav.Link> */}
         <Nav.Link>
         <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>Home</h5>
         </Link>
         </Nav.Link>
         <Nav.Link>
         <Link to='/leaderboard' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>Leaderboard</h5>
         </Link>
         </Nav.Link>
         <Nav.Link>
         <Link to='/gamerec' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>GameRecommendation</h5>
         </Link>
         </Nav.Link>
         <Nav.Link>
         <Link to='/about' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>About</h5>
         </Link>
         </Nav.Link>
         <Nav.Link>
       {userSignedIn.accessToken  ? 
         <Link to='/signout' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>Sign Out</h5>
         </Link>
         :
         <Link to='/signin' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h5>Sign in</h5>
         </Link>
         }
         </Nav.Link>

       </Nav>
     </Container>
   </Navbar>
  )
}

export default NavBar