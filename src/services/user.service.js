import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'auth/'
const SEC_URL = 'user/'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

export const userService = {
  login,
  logout,
  signup,
  getById,
  getLoggedinUser,
  update,
  updateScore,
  getEmptyCredentials,
}

function getById(userId) {
  return httpService.get(SEC_URL + userId)
}

async function update(user) {
  try {
    const updatedUser = await httpService.put(SEC_URL + user._id, user)
    if (user.isAdmin) updatedUser.isAdmin = true
    return _setLoggedinUser(updatedUser)
  } catch (err) {
    return Promise.reject('Invalid login')
  }
}

async function login({ username, password }) {
  const user = await httpService.post(BASE_URL + 'login', {
    username,
    password,
  })
  if (user) {
    return _setLoggedinUser(user)
  } else return Promise.reject('Invalid login')
}

async function signup({ username, password, fullname }) {
  const user = { username, password, fullname, score: 10000 }
  const user_1 = await httpService.post(BASE_URL + 'signup', user)
  if (user_1) return _setLoggedinUser(user_1)
  else return Promise.reject('Invalid signup')
}

async function updateScore(diff) {
  if (getLoggedinUser().score + diff < 0) return Promise.reject('No credit')
  const user = await httpService.put('user/', { diff })
  _setLoggedinUser(user)
  return user.score
}

async function logout() {
  await httpService.post(BASE_URL + 'logout')
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function _setLoggedinUser(user) {
  const userToSave = {
    _id: user._id,
    username: user.username,
    fullname: user.fullname,
    imgUrl: user.imgUrl,
    score: user.score,
  }
  if (user.isAdmin) userToSave.isAdmin = true
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
  return userToSave
}

function getEmptyCredentials() {
  return {
    username: '',
    password: '',
    fullname: '',
  }
}

// Test Data
// userService.signup({username: 'muki', password: 'muki1', fullname: 'Muki Ja'})
// userService.login({username: 'muki', password: 'muki1'})
