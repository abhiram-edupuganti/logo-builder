import { useState } from 'react'
import { Button } from "@/components/ui/button"

import Header from './components/Header'
import './App.css'
import SideNav from './components/SideNav'

function App() {

  return (
    <>
      <Header />
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>console.log(value)}/>
      </div>
      <div className='ml-64'>
        <p>Body</p>
      </div>
    </>
  )
}

export default App
