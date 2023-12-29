import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'
import { ToyPreviewEdit } from '../cmps/ToyPreviewEdit'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import useAdminRedirect from '../../hooks/useAdminRedirect'

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

export function ToyEdit() {
  const { toyId } = useParams()
  const [selectedToy, setSelectedToy] = useState(null)
  useEffect(() => {
    toyService.getById(toyId).then((toy) => {
      setSelectedToy(toy)
    })
  }, [])
  const isAdmin = useAdminRedirect(true, '/', false)
  if (!selectedToy || !isAdmin) {
    return <></>
  }
  return (
    <section className="page toy-edit-page">
      <ThemeProvider theme={theme}>
        <h2>Toy Edit</h2>

        <ToyPreviewEdit toy={selectedToy} />
      </ThemeProvider>
    </section>
  )
}
