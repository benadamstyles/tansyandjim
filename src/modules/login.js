import {useState} from 'react'

export function useLogin() {
  var [loggedIn, setLoggedInStatus] = useState(false)

  function login() {
    setLoggedInStatus(true)
  }

  return {
    loggedIn: loggedIn,
    login: login,
  }
}
