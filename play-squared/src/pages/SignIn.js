import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function SignIn({setUserSignedIn, setAccessToken}) {
    const navigate = useNavigate()
    const loginEndpoint = 'api/token/'

    const [formState, setFormState] = useState({username:'', password:''})
    const [networkErrMsg, setNetworkErrMsg] = useState(null)
    const [clientErrMsg, setClientErrMsg] = useState(null)

    const statusCodeToErr = (responseObj) => {
        setNetworkErrMsg(`Network Error of code: ${responseObj.status}`)
    }

    const clientFormValidation = (formState) => {
        const blankFields = Object.entries(formState)
                                  .filter(kv => kv[1] === '')
        if (blankFields.length > 0) {
            setClientErrMsg(`${blankFields[0][0]} can not be blank`)
            return false
        }
        setClientErrMsg(null)
        return true
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()

        setNetworkErrMsg(null)
        navigate('/')

        if (!clientFormValidation(formState)) {
            return
        }
        
        const apiUrl = 'http://localhost:8000/'
        
        fetch( apiUrl + loginEndpoint, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify(formState)
                }
        )
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    statusCodeToErr(res)
                    return Promise.resolve(null)
                }
            })
            .then(data => {
                if (!data) {
                    console.log(`problem with network request: ${networkErrMsg}`)
                } else {
                    
                    console.log(data)

                    setUserSignedIn(formState.username)

                    setAccessToken(data.access)
                    // add tokens to localstorage here

                    localStorage.setItem('access_token', data.access)
                    localStorage.setItem('user', formState.username)
                    // redirect here
                }
            })
    }

    return (
    <div>
      <h3>Login</h3>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control id="username" name="username" type="text" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control id="password" name="username" type="text" onChange={handleChange}/>
            </Form.Group>
            <Button variant="success" className="submit-gamerec" type="submit" >Login</Button>
            </Form> 
            
        <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p>
        
    </div>
    );
}

export default SignIn;