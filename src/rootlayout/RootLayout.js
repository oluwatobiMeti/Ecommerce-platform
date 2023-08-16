import React from 'react'
import Nav from "../component/Nav"
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div>
      <header>
         <Nav/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
