import React, { useState } from 'react'
import { Button, Input, Stack } from '@mui/material'
import { userService } from '../services/user.service.js'

export function LoginForm({ onLogin, isSignup }) {
  const [credentials, setCredentials] = useState(
    userService.getEmptyCredentials()
  )

  function handleChange({ target }) {
    const { name: field, value } = target
    setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
  }

  function handleKeyDown(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      const inputs = ['username', 'password', 'fullname']
      const currentInputIndex = inputs.indexOf(ev.target.name)
      const nextInputName = inputs[currentInputIndex + 1]

      if (ev.target.name === 'username') focusNext(nextInputName)
      if (ev.target.name === 'password' && !isSignup) submitForm()
      if (ev.target.name === 'password' && isSignup) focusNext(nextInputName)
      if (ev.target.name === 'fullname') submitForm()
    }

    function focusNext(nextInputName) {
      const nextInput = document.getElementsByName(nextInputName)[0]
      nextInput && nextInput.focus()
    }
    function submitForm() {
      handleSubmit(ev)
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    onLogin(credentials)
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Stack direction="column" gap={3} spacing={3}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onKeyDown={handleKeyDown}
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
          onKeyDown={handleKeyDown}
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
            onKeyDown={handleKeyDown}
            required
          />
        )}
        <Button variant="contained" onClick={handleSubmit}>
          {isSignup ? 'Signup' : 'Login'}
        </Button>
      </Stack>
    </form>
  )
}
