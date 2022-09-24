import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

export default function AppLayout() {
  return (
    <div>
        
        <Navbar></Navbar>
        <Outlet/>
    </div>
  )
}
