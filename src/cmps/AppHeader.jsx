import { NavLink, useNavigate } from 'react-router-dom'
import { LoginSignup } from './LoginSignup'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import {
  Avatar,
  Badge,
  Button,
  Stack,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { UserMsg } from './UserMsg'
import { logout } from '../store/actions/user.actions'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Close } from '@mui/icons-material'

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
})

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
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

  function showModal() {
    setIsShowModal((prevIsShowModal) => !prevIsShowModal)
  }

  return (
    <ThemeProvider theme={theme}>
      <header className="app-header full main-layout">
        <nav className="mobile-nav">
          <Button
            className={`hamburger-btn ${isMenuOpen ? 'open' : 'close'}`}
            color="secondary"
            variant="contained"
            onClick={() => {
              setIsMenuOpen((p) => !p)
            }}>
            {isMenuOpen ? (
              <Close className="icon" />
            ) : (
              <MenuIcon className="icon" />
            )}
          </Button>
          <div className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
            <NavLink className="nav-link-btn" to="/">
              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                }}
                variant="text"
                color="secondary"
                style={{ color: theme.palette.secondary.contrastText }}>
                Home
              </Button>
            </NavLink>
            <NavLink className="nav-link-btn" to="/about">
              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                }}
                variant="text"
                color="secondary"
                style={{ color: theme.palette.secondary.contrastText }}>
                About
              </Button>
            </NavLink>
            {user?.isAdmin && (
              <NavLink className="nav-link-btn" to="/dashboard">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false)
                  }}
                  variant="text"
                  color="secondary"
                  style={{ color: theme.palette.secondary.contrastText }}>
                  Dashboard
                </Button>
              </NavLink>
            )}
            <NavLink className="nav-link-btn" to="/toy">
              <Button
                onClick={() => {
                  setIsMenuOpen(false)
                }}
                variant="text"
                color="secondary"
                style={{ color: theme.palette.secondary.contrastText }}>
                Toys
              </Button>
            </NavLink>
          </div>
        </nav>
        <nav className="header-nav">
          <NavLink className="nav-link-btn" to="/">
            <Button
              variant="text"
              color="secondary"
              style={{ color: theme.palette.secondary.contrastText }}>
              Home
            </Button>
          </NavLink>
          <NavLink className="nav-link-btn" to="/about">
            <Button
              variant="text"
              color="secondary"
              style={{ color: theme.palette.secondary.contrastText }}>
              About
            </Button>
          </NavLink>
          {user?.isAdmin && (
            <NavLink className="nav-link-btn" to="/dashboard">
              <Button
                variant="text"
                color="secondary"
                style={{ color: theme.palette.secondary.contrastText }}>
                Dashboard
              </Button>
            </NavLink>
          )}
          <NavLink className="nav-link-btn" to="/toy">
            <Button
              variant="text"
              color="secondary"
              style={{ color: theme.palette.secondary.contrastText }}>
              Toys
            </Button>
          </NavLink>
        </nav>
        {user ? (
          <section className="user-section">
            <Stack direction='row' alignItems='center' spacing={2} to={`/user/${user._id}`}>
              <Avatar
                variant="rounded"
                alt={user.fullname}
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                }}>
                {user.fullname.substring(0, 1)}
              </Avatar>

              <span>${user.score.toLocaleString()}</span>
            </Stack>

            <Button variant="contained" onClick={onLogout}>
              Logout
            </Button>
          </section>
        ) : (
          <>
            <section className="user-section">
              <Button variant="contained" onClick={showModal}>
                Login
              </Button>
            </section>
            <LoginSignup isShowModal={isShowModal} showModal={showModal} />
          </>
        )}
      </header>
      <UserMsg />
    </ThemeProvider>
  )
}
