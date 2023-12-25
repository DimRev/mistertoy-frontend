import { toyService } from '../../services/toy.service'
import { ADD_TOY } from '../reducers/toy.reducer'
import { REMOVE_TOY } from '../reducers/toy.reducer'
import { SET_TOYS } from '../reducers/toy.reducer'
import { UPDATE_TOY } from '../reducers/toy.reducer'

import { SET_IS_LOADING } from '../reducers/toy.reducer'

import { store } from '../store'

export function loadToys() {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  return toyService
    .query().then((toys) => {
      store.dispatch({ type: SET_TOYS, toys })
    })
    .catch((err) => {
      console.error('toy action -> cannot load toys', err)
      throw err
    })
    .finally(() => {
      store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    })
}

export function removeToy(toyId) {
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  return toyService
    .remove(toyId)
    .then(() => {
      store.dispatch({ type: REMOVE_TOY, toyId })
    })
    .catch((err) => {
      console.error('toy action -> cannot remove toy', err)
      throw err
    })
    .finally(() => {
      store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    })
}

export function saveToy(toy) {
  const type = toy.id ? UPDATE_TOY : ADD_TOY
  const errType = toy.id ? 'update' : 'add'
  store.dispatch({ type: SET_IS_LOADING, isLoading: true})
  return toyService.save(toy).then((toyToSave) => {
    store.dispatch({ type, toy: toyToSave })
    return toyToSave
  }).catch((err) => {
    console.error(`toy action -> cannot ${errType} toy`, err)
    throw err
  }).finally(()=>{
    store.dispatch({ type: SET_IS_LOADING, isLoading: false})
  })
}
