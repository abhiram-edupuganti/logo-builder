import { useState } from 'react'
import { Button } from "@/components/ui/button"

import Header from './components/Header'
import './App.css'
import SideNav from './components/SideNav'
import IconController from './components/IconController'
import BackgroundController from './components/BackgroundController'

//css added "fixed" in  div ml-64

function App() {

  const [selectedIndex,setSelectedIndex]=useState();

  return (
    <>
      <Header />
      <div className='w-64 fixed'>
        <SideNav selectedIndex={(value)=>setSelectedIndex(value)}/>
      </div>
      
      <div className='ml-64 grid grid-cols-1 md:grid-cols-6'>
        <div className='md:col-span-2 border h-screen shadow-sm p-5 overflow-auto'>
          {selectedIndex==0?
          <IconController/>:
          <BackgroundController/>
          }
        </div>
        <div className='md:col-span-3 bg-red-200'>
          Icon Preview
        </div>
        <div className='bg-blue-100'>
          Ad Banner
        </div>
      </div>
    </>
  )
}

export default App
