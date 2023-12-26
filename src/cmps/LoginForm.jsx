import { useState } from 'react'
import { Button, Input } from '@mui/material'
import { userService } from '../services/user.service.js'

// const { useState } = React

export function LoginForm({ onLogin, isSignup }) {
  const [credentials, setCredentials] = useState(
    userService.getEmptyCredentials()
  )

  function handleChange({ target }) {
    const { name: field, value } = target
    setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    onLogin(credentials)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        required
        autoFocus
      />
      <Input
        type="password"
        name="password"
        value={credentials.password}
        placeholder="Password"
        onChange={handleChange}
        required
        autoComplete="off"
      />
      {isSignup && (
        <Input
          type="text"
          name="fullname"
          value={credentials.fullname}
          placeholder="Full name"
          onChange={handleChange}
          required
        />
      )}
      <Button variant="contained" onClick={handleSubmit}>
        {isSignup ? 'Signup' : 'Login'}
      </Button>
    </form>
  )
}
