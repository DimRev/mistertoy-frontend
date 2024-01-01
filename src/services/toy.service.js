const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
]

const demoData = [
  {
    _id: 't101',
    name: 'Talking Doll',
    price: 123,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: 1631031801011,
    inStock: true,
  },
  {
    _id: 't102',
    name: 'Building Blocks Set',
    price: 45,
    labels: ['Box game', 'Art', 'Baby'],
    createdAt: 1631032802022,
    inStock: true,
  },
  {
    _id: 't103',
    name: 'Remote Control Car',
    price: 89,
    labels: ['On wheels', 'Battery Powered', 'Baby'],
    createdAt: 1631033803033,
    inStock: false,
  },
  {
    _id: 't104',
    name: 'Puzzle Game',
    price: 19,
    labels: ['Puzzle', 'Outdoor', 'Baby'],
    createdAt: 1631034804044,
    inStock: true,
  },
  {
    _id: 't105',
    name: 'Plush Teddy Bear',
    price: 34,
    labels: ['Baby', 'Art'],
    createdAt: 1631035805055,
    inStock: true,
  },
]

import Axios from 'axios'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'
import { storageService } from './async-storage.service.js'

// for cookies
const axios = Axios.create({
  withCredentials: true,
})

const BASE_URL = 'toy/'
const STORAGE_KEY = 'toyDB'

// _demoDataLocalStorage()

export const toyService = {
  query,
  getById,
  save,
  remove,
  addMsg,
  getEmptyToy,
  getEmptyMsg,
  getDefaultFilter,
}

function query(filterBy = {}, sortBy = 'name', owner = undefined, page = 1) {
  // return storageService.query(STORAGE_KEY)
  return httpService.get(BASE_URL, { filterBy, sortBy, owner, page })
}

function getById(toyId) {
  // return storageService.get(STORAGE_KEY, toyId)
  return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
  // return storageService.remove(STORAGE_KEY, toyId)
  return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
  if (toy._id) {
    // return storageService.put(STORAGE_KEY, toy)
    return httpService.put(BASE_URL, toy)
  } else {
    // return storageService.post(STORAGE_KEY, toy)
    return httpService.post(BASE_URL, toy)
  }
}

function addMsg(toyId, msg){
  return httpService.post(BASE_URL + 'msg/' ,{ toyId, msg })
}

function getEmptyToy() {
  return {
    name: utilService.makeLorem(2),
    price: utilService.getRandomIntInclusive(10, 200),
    labels: [],
    inventory: 100,
    stock: 100,
    rating: 2,
    createdAt: Date.now(),
    inStock: true,
    img: utilService.getRandomIntInclusive(0, imgName.length),
  }
}

function getEmptyMsg() {
  return { content: '', owner: {username:'Anonymous'}, createdAt: Date.now(), id: utilService.makeId()}
}

function getDefaultFilter() {
  return { name: '', price: 0, labels: '', Date: '', availability: 'all' }
}

function _demoDataLocalStorage() {
  const toys = utilService.loadFromStorage(STORAGE_KEY)
  if (!toys || toys.length === 0)
    utilService.saveToStorage(STORAGE_KEY, demoData)
}

const imgName = [
  'https://res.cloudinary.com/deb9cau2u/image/upload/tqdvahj8fr2iybcbqzup.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/xjdekmuudbeib3ddo7ge.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/ezxqzlfxwgu7itpze2f9.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/t9rxwxu5vhva8epmnmsa.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/ahymhtlmcfhcp0anajp9.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/ohfiuwardfnq40mgitqk.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/qfydjqjsp8bx1qetsbvp.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/qskr2ccm5roefff6oyre.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/svdlykzccosrjlmugeul.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/fyabxg810eevhhq8jonh.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/vg48mtar97b80zcdtmrh.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/wxb2ahmmrwpaxsu6whyu.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/nwmxrz5a3j8c0nnvczgl.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/wsjj2ibxun5qdm3q1xqi.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/gye1twtr424hkkdsz8wf.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/nw27by8trxeeowj1vzai.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/mwp1udtew0z52dbhpfck.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/civ6d0aqjk9czoqotuw7.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/scee3dvkyvr8o6fit4wa.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/r4jurpqgffygdndkn7wl.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/kowlsicaipylbzgsktkd.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/hbcgbdb2zomka4givrae.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/lz37yd8excvtbnybarc8.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/nkpfgyva3oahhlkv0iml.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/w1kfanftlu9dxp8xltab.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/uru5ljwehez0dq0deklr.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/n0j8qtalrfhmzgh8hov0.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/qngb5p5j2zzqgkcota7q.png',
  'https://res.cloudinary.com/deb9cau2u/image/upload/rtijn28ofzjxztdfzugj.png',
]































