const demoData = {
  pricePerLabel: {
    'On wheels': 10,
    'Box game': 20,
    'Art': 30,
    'Baby': 40,
    'Doll': 30,
    'Puzzle': 20,
    'Outdoor': 10,
    'Battery Powered': 5,
  },
  inventoryByLabel: {
    'On wheels': 3,
    'Box game': 4,
    'Art': 5,
    'Baby': 2,
    'Doll': 3,
    'Puzzle': 2,
    'Outdoor': 7,
    'Battery Powered': 9,
  },
  totalByLabel: {
    'On wheels': 10,
    'Box game': 6,
    Art: 15,
    Baby: 22,
    Doll: 7,
    Puzzle: 5,
    Outdoor: 10,
    'Battery Powered': 9,
  },
}

import Axios from 'axios'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js'
import { storageService } from './async-storage.service.js'

// for cookies
const axios = Axios.create({
  withCredentials: true,
})

const BASE_URL = 'dashboard/'
const STORAGE_KEY = 'toyDB'

export const dashboardService = {
  query,
}

function query(){
  return httpService.get(BASE_URL)
  // return Promise.resolve(demoData)
}
