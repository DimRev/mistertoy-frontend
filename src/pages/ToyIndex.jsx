import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'

import { ToyList } from '../cmps/ToyIndexCmps/ToyList'

import {
  addToy,
  loadToys,
  removeToy,
  setOwner,
} from '../store/actions/toy.actions'
import { ToyFilter } from '../cmps/ToyIndexCmps/ToyFilter'
import { ToySort } from '../cmps/ToyIndexCmps/ToySort'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Stack } from '@mui/material'
import { showSuccessMsg } from '../services/event-bus.service'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Shop, ShoppingBag } from '@mui/icons-material'

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

export function ToyIndex() {
  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const isLoading = useSelector((storeState) => storeState.toyModule.isLoading)
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)
  const sortBy = useSelector((storeState) => storeState.toyModule.sortBy)
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const owner = useSelector((storeState) => storeState.toyModule.owner)
  const page = useSelector((storeState) => storeState.toyModule.page)

  const location = useLocation()
  const [cartOpen, setCartOpen] = useState(location.pathname.includes('/cart'))

  useEffect(() => {
    setOwner(undefined)
  })

  useEffect(() => {
    loadToys()
  }, [filterBy, sortBy, owner, page])

  async function onAdd() {
    try {
      await addToy(user)
      showSuccessMsg('Toy added successfully')
    } catch (err) {
      showSuccessMsg('Error adding the toy')
    }
  }

  function onDelete(toyId) {
    removeToy(toyId)
  }

  function onCart() {}

  return (
    <section className="page toy-index-page">
      <ThemeProvider theme={theme}>
        <ToyFilter />
        <Stack margin={2} direction="row" spacing={2}>
          <ToySort />
          {user && (
            <Button variant="text" onClick={onAdd}>
              Add toy
            </Button>
          )}
        </Stack>
        <ToyList toys={toys} onDelete={onDelete} isLoading={isLoading} />
        {user && (
          <>
            <NavLink to={cartOpen ? '/toy/' : './cart'}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  height: '60px',
                  width: '60px',
                  position: 'fixed',
                  bottom: '1em',
                  left: '1em',
                }}
                onClick={() => {
                  setCartOpen((p) => !p)
                }}>
                <ShoppingBag />
              </Button>
            </NavLink>
            <Outlet />
          </>
        )}
      </ThemeProvider>
    </section>
  )
}
