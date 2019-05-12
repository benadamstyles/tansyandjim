import React from 'react'

function LoginText() {
  return <p>Please log in to upload photos to the gallery</p>
}

function PasswordField() {
  return (
    <label>
      Password
      <input type="password" required />
    </label>
  )
}

function LoginButton() {
  return <button type="submit">Log In</button>
}

export default function LoginForm(props) {
  function submit(event) {
    event.preventDefault()
    props.login()
  }

  return (
    <form id="gallery-password" onSubmit={submit}>
      <LoginText />
      <PasswordField />
      <LoginButton />
    </form>
  )
}
