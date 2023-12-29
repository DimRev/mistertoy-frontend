import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Button from '@mui/material/Button'

import { ToyList } from '../cmps/ToyIndexCmps/ToyList'

import { loadToys, removeToy, saveToy } from '../store/actions/toy.actions'
import { toyService } from '../services/toy.service'
import { ToyFilter } from '../cmps/ToyIndexCmps/ToyFilter'
import { ToySort } from '../cmps/ToyIndexCmps/ToySort'
import { TestCmps } from '../cmps/testCmps'

import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export function ToyIndex() {
  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)
  const sortBy = useSelector((storeState) => storeState.toyModule.sortBy)

  useEffect(() => {
    loadToys()
  }, [filterBy, sortBy])

  function onAdd() {
    const toy = toyService.getEmptyToy()
    saveToy(toy)
  }

  function onDelete(toyId) {
    removeToy(toyId)
  }

  return (
    <section className="page toy-index-page">
      <ThemeProvider theme={theme}>
        <ToyFilter />
        {/* <TestCmps /> */}
        <ToySort />
        <Button variant="text" onClick={onAdd}>
          Add toy
        </Button>
        <ToyList toys={toys} onDelete={onDelete} />
      </ThemeProvider>
    </section>
  )
}
