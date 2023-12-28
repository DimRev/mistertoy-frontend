import { NavLink, useNavigate } from 'react-router-dom'
import { LoginSignup } from './LoginSignup'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { Button } from '@mui/material'
import { UserMsg } from './UserMsg'
import { logout } from '../store/actions/user.actions'

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const navigate = useNavigate()

  async function onLogout() {
    try {
      await logout()
      showSuccessMsg('Logged out successfully')
      navigate('/')
    } catch (err) {
      showErrorMsg('OOPs try again')
    }
  }

  return (
    <header className="app-header full main-layout">
      <nav className="header-nav">
        <NavLink className="nav-link-btn" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link-btn" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link-btn" to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="nav-link-btn" to="/toy">
          Toys
        </NavLink>
      </nav>
      {user ? (
        <section>
          <span to={`/user/${user._id}`}>
            Hello {user.fullname} <span>${user.score.toLocaleString()}</span>
          </span>

          <Button variant="contained" onClick={onLogout}>
            Logout
          </Button>
        </section>
      ) : (
        <section>
          <LoginSignup />
        </section>
      )}
      <UserMsg />
    </header>
  )
}
