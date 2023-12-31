import { Button, ThemeProvider, createTheme } from '@mui/material'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAdminRedirect from '../../hooks/useAdminRedirect'
import { useEffect } from 'react'

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

export function DashboardPage() {
  const isAdmin = useAdminRedirect(true, '/', false)
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/dashboard') navigate('./analytics')
  }, [])
  if (!isAdmin) return <></>
  return (
    <ThemeProvider theme={theme}>
      <section className="page dashboard-page full">
        <section className="dashboard-sidebar">
          <section className="nav-section">
            <NavLink to={'/dashboard/analytics'}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ color: theme.palette.secondary.contrastText }}>
                Analytics
              </Button>
            </NavLink>
            <NavLink to={'/dashboard/products'}>
              <Button
                variant="outlined"
                color="secondary"
                style={{ color: theme.palette.secondary.contrastText }}>
                Products
              </Button>
            </NavLink>
          </section>
        </section>
        <main>
          <Outlet />
        </main>
      </section>
    </ThemeProvider>
  )
}
