import { NavLink, useNavigate } from 'react-router-dom'
import { LoginSignup } from './LoginSignup'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { UserMsg } from './UserMsg'
import { logout } from '../store/actions/user.actions'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ea1a5b',
      contrastText: '#ffffff', // Text color for primary
      dark: '#bf1248',
      light: '#ee497c',
    },
    secondary: {
      main: '#ea3e1a',
      contrastText: '#ffffff', // Text color for secondary
      dark: '#bf3012',
      light: '#ee6549',
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <header className="app-header full main-layout">
        <nav className="header-nav">
          <NavLink className="nav-link-btn" to="/">
            <Button variant="text" color="secondary" style={{ color: theme.palette.secondary.contrastText }}>
              Home
            </Button>
          </NavLink>
          <NavLink className="nav-link-btn" to="/about">
            <Button variant="text" color="secondary" style={{ color: theme.palette.secondary.contrastText }}>
              About
            </Button>
          </NavLink>
          <NavLink className="nav-link-btn" to="/dashboard">
            <Button variant="text" color="secondary" style={{ color: theme.palette.secondary.contrastText }}>
              Dashboard
            </Button>
          </NavLink>
          <NavLink className="nav-link-btn" to="/toy">
            <Button variant="text" color="secondary" style={{ color: theme.palette.secondary.contrastText }}>
              Toys
            </Button>
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
          <LoginSignup />
        )}
      </header>
      <UserMsg />
    </ThemeProvider>
  )
}
