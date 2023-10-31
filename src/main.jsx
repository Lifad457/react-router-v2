import React from 'react'
import "../server"
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanCardDetails from './components/vans/VanCardDetails'
import Dashboard from './pages/Dashboard'
import Income from './components/host/Income'
import Reviews from './components/host/Reviews'
import HostLayout from './components/host/Layout'
import HostVans from './components/host/Vans'
import HostVanDetails from './components/host/VanDetails'
import Details from './components/host/van-details-nav/Details'
import Pricing from './components/host/van-details-nav/Pricing'
import Photos from './components/host/van-details-nav/Photos'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:vanId" element={<VanCardDetails />} />
      <Route path="host" element={<HostLayout />} >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:vanId" element={<HostVanDetails />}>
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>
      
      <Route path="*" element={<ErrorPage />} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
