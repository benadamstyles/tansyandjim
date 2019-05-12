import React from 'react'

function LoginText() {
  return <p>Please log in to upload photos to the gallery</p>
}

function PasswordField(props) {
  function onChange(event) {
    props.onChange(event.target.value)
  }

  return (
    <label>
      Password
      <input type="password" required onChange={onChange} />
    </label>
  )
}

function LoginButton() {
  return <button type="submit">Log In</button>
}

export default function LoginForm(props) {
  var [password, setPassword] = React.useState('')

  function submit(event) {
    event.preventDefault()
    props.login(password)
  }

  return (
    <form id="gallery-password" onSubmit={submit}>
      <LoginText />
      <PasswordField onChange={setPassword} />
      <LoginButton />
    </form>
  )
}
