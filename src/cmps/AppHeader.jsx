import { NavLink } from 'react-router-dom'
import { LoginSignup } from './LoginSignup'
import { useDispatch, useSelector } from 'react-redux'
import { userService } from '../services/user.service'
import { SET_USER } from '../store/reducers/user.reducer'
import { showErrorMsg } from '../services/event-bus.service'
import { Button } from '@mui/material'

export function AppHeader() {
  const dispatch = useDispatch()
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)

  function onLogout() {
    userService.logout()
        .then(() => {
            // DONE: use dispatch
            onSetUser(null)
        })
        .catch((err) => {
            showErrorMsg('OOPs try again')
        })
}

function onSetUser(user) {
    // DONE: use dispatch
    // setUser(user)
    dispatch({ type: SET_USER, user })
    navigate('/')
}

  return (
    <header className="app-header main-layout">
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/toy">Toys</NavLink>
      </nav>
      {user ? (
        <section>
          <span to={`/user/${user._id}`}>
            Hello {user.fullname} <span>${user.score.toLocaleString()}</span>
          </span>

          <Button variant='contained' onClick={onLogout}>Logout</Button>
        </section>
      ) : (
        <section>
          <LoginSignup onSetUser={onSetUser} />
        </section>
      )}
    </header>
  )
}
