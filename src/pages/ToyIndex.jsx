import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import Button from '@mui/material/Button'

import { ToyList } from '../cmps/ToyIndexCmps/ToyList'

import { loadToys, removeToy, saveToy } from '../store/actions/toy.actions'
import { toyService } from '../services/toy.service'
import { ToyFilter } from '../cmps/ToyIndexCmps/ToyFilter'
import { ToySort } from '../cmps/ToyIndexCmps/ToySort'
import { TestCmps } from '../cmps/testCmps'

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
    <section className="toy-index-page">
      <ToyFilter />
      {/* <TestCmps /> */}
      <ToySort />
      <Button variant="text" onClick={onAdd}>
        Add toy
      </Button>
      <ToyList toys={toys} onDelete={onDelete} />
    </section>
  )
}
