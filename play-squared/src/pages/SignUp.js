import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {useNavigate} from 'react-router-dom';

function SignUp({setUserSignedIn}){

  const navigate = useNavigate()

  const [formInfo, setFormInfo] = useState({username:'', password:''})
  const [networkErrMsg, setNetworkErrMsg] = useState(null)
  const [clientErrMsg, setClientErrMsg] = useState(null)

  const statusCodeToErr = () => {
    setNetworkErrMsg(`Username Unavailable`)
  }

  const clientFormValidation = (formInfo) => {
    const blankFields = Object.entries(formInfo)
                              .filter(kv => kv[1] === '')
    if (blankFields.length > 0) {
        setClientErrMsg(`${blankFields[0][0]} can not be blank`)
        return false
    }
    setClientErrMsg(null)
    return true
  }

  const handleChange = (e) => {
    setFormInfo({...formInfo, [e.target.id]: e.target.value})
  }

  const handleLogin = (e) => {
        
    e.preventDefault()

    setNetworkErrMsg(null)
    if (!clientFormValidation(formInfo)) {
        return
    }
    
    const apiUrl = 'https://localhost:8000/signup/'
    
    fetch( apiUrl , 
            {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(formInfo)
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
                setUserSignedIn(data.username)
                navigate('signin')
            }
        })

  }

  return (
    <div>
      <h3>Sign up</h3>

      {
        networkErrMsg 
        ? <Alert variant='warning' className="form">{networkErrMsg}</Alert>
        : null
      }
      
      <Form className="form" onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId="username">
        <Form.Label>Create Username:</Form.Label>
        <Form.Control name="username" type="text" placeholder="Enter username" onChange={handleChange}/>
        </Form.Group>
        <br />
       
       <Form.Group className='mb-3' controlId="password">
        <Form.Label>Create Password:</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
        </Form.Group>
        <br />

        <Button variant="primary" type="submit">Sign up</Button>

      </Form>

      <p>{clientErrMsg}</p>
     </div>
  );

}

export default SignUp;