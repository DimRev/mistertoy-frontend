import { useSelector } from 'react-redux'
import { ToyList } from '../cmps/ToyIndexCmps/ToyList'
import { loadToys, removeToy, setOwner } from '../store/actions/toy.actions'
import { useEffect } from 'react'
import { ToyFilter } from '../cmps/ToyIndexCmps/ToyFilter'
import { Button, Stack } from '@mui/material'
import { ToySort } from '../cmps/ToyIndexCmps/ToySort'

export function UserProfileToy() {
  const user = useSelector((storeState) => storeState.userModule.loggedinUser)
  const toys = useSelector((storeState) => storeState.toyModule.toys)
  const isLoading = useSelector((storeState) => storeState.toyModule.isLoading)
  const filterBy = useSelector((storeState) => storeState.toyModule.filterBy)
  const sortBy = useSelector((storeState) => storeState.toyModule.sortBy)
  const owner = useSelector((storeState) => storeState.toyModule.owner)

  useEffect(() => {
    loadToys()
  }, [filterBy, sortBy, owner])

  useEffect(() => {
    setOwner(user._id)
  }, [user])

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

  return (
    <section className="user-toys-section">
      <ToyFilter />
      <Stack margin={2} direction="row" spacing={2}>
        <ToySort />
        {user && (
          <Button variant="text" onClick={onAdd}>
            Add toy
          </Button>
        )}
      </Stack>
      <ToyList toys={toys} isLoading={isLoading} onDelete={onDelete} />
    </section>
  )
}
