import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/style/main.css'

import { store } from './store/store'
import { HomePage } from './pages/HomePage'
import { ToyIndex } from './pages/ToyIndex'
import { ToyDetails } from './pages/ToyDetails'
import { ToyEdit } from './pages/ToyEdit'
import { AppHeader } from './cmps/AppHeader'
import { AboutPage } from './pages/AboutPage'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppHeader />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ToyIndex />} path="/toy" />
          <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
          <Route element={<ToyDetails />} path="/toy/:toyId" />
        </Routes>
      </Router>
    </Provider>
  )
}