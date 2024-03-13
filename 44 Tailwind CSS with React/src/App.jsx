import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <Header />
     <main className='py-4 px-4 '>
     <Outlet />
     </main>
    </>
  )
}

export default App
