import { toyService } from '../../services/toy.service'
import { ADD_TOY, SET_OWNER, SET_PAGE } from '../reducers/toy.reducer'
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
  const owner = store.getState().toyModule.owner
  const page = store.getState().toyModule.page


  let toysData
  store.dispatch({ type: SET_IS_LOADING, isLoading: true })
  try {
    toysData = await toyService.query(filterBy, sortBy, owner, page)
    store.dispatch({ type: SET_TOYS, toysData })
  } catch (err) {
    console.error('toy action -> cannot load toys', err)
    throw err
  } finally {
    store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    return toysData
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

export async function addToy(user){
  const toy = toyService.getEmptyToy()
  toy.owner = user
  saveToy(toy)
}

export async function saveToy(toy) {
  const type = toy._id ? UPDATE_TOY : ADD_TOY
  const errType = toy._id ? 'update' : 'add'
  let toyToSave = {...toy}
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

export async function addToyMsg(toyId,msg,user){
  const newMsg = {...toyService.getEmptyMsg(), content:msg}
  if(user) newMsg.owner = user
  try {
    const savedMsg = await toyService.addMsg(toyId, newMsg)
    return savedMsg
  } catch (err) {
    console.error(`toy action -> cannot save Msg`, err)
  }
}

export function setFilter(filterBy) {
  store.dispatch({ type: SET_FILTER, filterBy })
}

export function setSort(sortBy) {
  store.dispatch({ type: SET_SORT, sortBy })
}

export function setOwner(userId){
  store.dispatch({ type: SET_OWNER, owner: userId})
}

export function setPage(page){
  store.dispatch({ type: SET_PAGE, page: page })
}