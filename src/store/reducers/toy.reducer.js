import { toyService } from '../../services/toy.service'
export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER = 'SET_FILTER'
export const SET_SORT = 'SET_SORT'

const initialState = {
  toys: [],
  filterBy: { name: '', stockStatus: 'all' },
  sortBy: 'name',
  isLoading: false,
}

export function toyReducer(state = initialState, action = {}) {
  let toys

  switch (action.type) {
    // * TOYS CRUD
    case SET_TOYS:
      return { ...state, toys: action.toys }

    case REMOVE_TOY:
      toys = state.toys.filter((toy) => toy._id !== action.toyId)
      return { ...state, toys }

    case ADD_TOY:
      toys = [action.toy, ...state.toys]
      return { ...state, toys }

    case UPDATE_TOY:
      toys = state.toys.map((toy) =>
        toy._id === action.toy._id ? action.toy : toy
      )
      return { ...state, toys }

    // * FILTER
    case SET_FILTER:
      return { ...state, filterBy: action.filterBy }
    case SET_SORT:
      return { ...state, sortBy: action.sortBy }

    // * LOADING
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading }

    default:
      return state
  }
}
