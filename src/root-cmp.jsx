import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/style/main.scss'

import { store } from './store/store'
import { HomePage } from './pages/HomePage'
import { ToyIndex } from './pages/ToyIndex'
import { ToyDetails } from './pages/ToyDetails'
import { ToyEdit } from './pages/ToyEdit'
import { AppHeader } from './cmps/AppHeader'
import { AboutPage } from './pages/AboutPage'
import { DashboardPage } from './pages/DashboardPage'
import { DashboardAnalytics } from './pages/DashboardAnalytics'
import { DashboardProducts } from './pages/DashboardProducts'
import { ToyCart } from './pages/ToyCart'
import { UserProfile } from './pages/UserProfile'

export function App() {
  return (
    <Provider store={store}>
      <main className="main-layout">
        <Router>
          <AppHeader />
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<DashboardPage />} path="/dashboard" >
              <Route element={<DashboardAnalytics />} path="/dashboard/analytics" />
              <Route element={<DashboardProducts />} path="/dashboard/products" />
            </Route>
            <Route element={<ToyIndex />} path="/toy">
              <Route element={<ToyCart />} path="/toy/cart"/>
            </Route>
            <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
            <Route element={<ToyDetails />} path="/toy/:toyId" />
            <Route element={<UserProfile />} path="/user/:userId" />
          </Routes>
        </Router>
      </main>
    </Provider>
  )
}
