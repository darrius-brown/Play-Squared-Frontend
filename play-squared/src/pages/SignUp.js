import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
function SignUp() {

  const navigate = useNavigate()

  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  }

  const [formState, setFormState] = useState(initialState);
  const [visible, setVisible] = useState(false);

  const handleChange = (event) => {
    setFormState(
      {
        ...formState,
        [event.target.id]: event.target.value,
      }
    )
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (formState.password === formState.passwordConfirm) {
      // createLogin(formState)
      navigate('/')
    } else {
      setVisible(!visible)
      navigate('/signup')
    }
    console.log('handlesubmit')
  }

  return (
    <div className='signUpMain'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="First name"
          id="firstname"
          onChange={handleChange}
          value={formState.firstname}
        />
        <label htmlFor="firstname">First name</label>

        <input type="text"
          placeholder="Last name"
          id="lastname"
          onChange={handleChange}
          value={formState.lastname}
        />
        <label htmlFor="lastname">Last name</label>

        <input type="text"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={formState.email}
        />
        <label htmlFor="email">Email</label>

        <input type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          value={formState.username}
        />
        <label htmlFor="username">Username</label>

        <input type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          value={formState.password}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Confirm password"
          id="passwordConfirm"
          onChange={handleChange}
          value={formState.passwordConfirm}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>

        <label htmlFor="role"></label>
        <h4>Role</h4>
        <select onChange={handleChange}
          id="role"
          value={formState.role}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>

        <button type="submit" onClick={handleSubmit}> Sign Up </button>

        {visible ? <p id="hello"> Passwords must match.</p> : null}

      </form>
    </div>
  )
}

export default SignUp