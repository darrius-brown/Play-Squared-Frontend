import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  const initialState = {
    username: '',
    password: ''
  }

  const [user, setUser] = useState({ username: '', password: '' })
  const [formState, setFormState] = useState(initialState)
  const [visible, setVisible] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = event => {
    setFormState(
      {
        ...formState,
        [event.target.id]: event.target.value
      })
  }

  async function handleSearch(formContent) {
    console.log('this is handle search')
    
  }

  return (
    <div className='sign-in'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input type="text"
          id="username"
          onChange={handleChange}
          value={formState.username} />
        <label htmlFor="message">Username: </label>

        <input type="password"
          id="password"
          onChange={handleChange}
          value={formState.password} />
        <label htmlFor="password">Password: </label>
        <button type="submit" onClick={() => { handleSearch(formState) }}>Submit</button>
      </form>
      <div id="signup">
        <h3>Don't Have an Account?</h3>

        <Link to='/signup'>
          <button>Create Account</button>
        </Link>

      </div>
    </div>
  )
}

export default SignIn