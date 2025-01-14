import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Bannner/Banner'
import About from './Components/About/About'
import Network from './Components/Network/Network'
import Footer from './Components/Footer/Footer'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Page/Home'

function App() {
  const myRout = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<Home/>}></Route>
    )
  )

  return (
    <>
    <RouterProvider router={myRout} />
    </>
  )
}

export default App
