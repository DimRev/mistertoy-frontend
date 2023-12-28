import { toyService } from '../../services/toy.service'
import { ADD_TOY } from '../reducers/toy.reducer'
import { REMOVE_TOY } from '../reducers/toy.reducer'
import { SET_TOYS } from '../reducers/toy.reducer'
import { UPDATE_TOY } from '../reducers/toy.reducer'

import { SET_IS_LOADING } from '../reducers/toy.reducer'

import { SET_FILTER } from '../reducers/toy.reducer'
import { SET_SORT } from '../reducers/toy.reducer'

import { store } from '../store'

// * TOY CRUD

export async function loadToys() {
  const filterBy = store.getState().toyModule.filterBy
  const sortBy = store.getState().toyModule.sortBy

  let toys
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  try {
    toys = await toyService.query(filterBy, sortBy)
    store.dispatch({ type: SET_TOYS, toys })
  } catch (err) {
    console.error('toy action -> cannot load toys', err)
    throw err
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    return toys
  }
}

export async function removeToy(toyId) {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  try {
    await toyService.remove(toyId)
    store.dispatch({ type: REMOVE_TOY, toyId })
  } catch (err) {
    console.error('toy action -> cannot remove toy', err)
    throw err
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
  }
}

export async function saveToy(toy) {
  const type = toy._id ? UPDATE_TOY : ADD_TOY
  const errType = toy._id ? 'update' : 'add'

  let toyToSave
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  try {
    toyToSave = await toyService.save(toy)
    store.dispatch({ type, toy: toyToSave})
  } catch (err) {
    console.error(`toy action -> cannot ${errType}`, err)
    throw err
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    return toyToSave
  }
}

export function setFilter(filterBy) {
  store.dispatch({ type: SET_FILTER, filterBy })
}

export function setSort(sortBy) {
  store.dispatch({ type: SET_SORT, sortBy })
}
