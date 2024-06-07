import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button'
import { Download } from 'lucide-react'

const Header = () => {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
        <img
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor" 
        />
        <Button className='flex gap-2 items-center' > <Download/> Downlaod</Button>
    </div>
  )
}

export default Header