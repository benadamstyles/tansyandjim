import {useState, useEffect} from 'react'
import firebase from './firebase'

// @ts-ignore
window.logout = function() {
  firebase.auth().signOut()
}

export function useLogin() {
  var [isLoggedIn, setLoggedInStatus] = useState(false)

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(function(user) {
        setLoggedInStatus(Boolean(user))
      }),
    [setLoggedInStatus]
  )

  function login(password) {
    firebase
      .auth()
      .signInWithEmailAndPassword('public@tansyandjim.com', password)
      .catch(alert)
  }

  return [isLoggedIn, login]
}
