import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

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

export function UserProfile() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const { userId } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    if (user?._id !== userId) {
      navigate('/')
    }
  }, [])

  if (user?._id !== userId) return <></>

  return (
    <section className="page user-profile-page">
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </section>
  )
}
