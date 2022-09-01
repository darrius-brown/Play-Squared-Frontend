import React, {useEffect} from 'react'
function Signout({setUserSignedIn, setAccessToken}) {

    useEffect(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        setUserSignedIn(null)
        setAccessToken(null)
    })
  return (
    <div>
        <h2 className='logout'>You are logged out!</h2>
    </div>
  )
}

export default Signout