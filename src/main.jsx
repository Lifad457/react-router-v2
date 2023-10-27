import React from 'react'
import "../server"
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans from './pages/Vans.jsx'
import VanCardDetails from './components/vans/VanCardDetails.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Income from './components/host/Income.jsx'
import Reviews from './components/host/Reviews.jsx'
import HostLayout from './components/host/Layout.jsx'

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
      </Route>
      
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
