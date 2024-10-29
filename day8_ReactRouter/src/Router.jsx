import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Router() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Router