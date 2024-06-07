import { PencilRuler, Shield, Image } from 'lucide-react'
import React, { act, useState } from 'react'

const SideNav = ({selectedIndex}) => {
    const menuList=[
        {
            id:1,
            name:'Icon',
            icon:PencilRuler
        },
        {
            id:2,
            name:'Background',
            icon:Image
        },
        {
            id:3,
            name:'Upgrade',
            icon:Shield
        }
    ]

    const [activeIndex,setActiveIndex]=useState(0)
    

  return (
    <div className='border shadow-sm h-screen'>
        <div>
            {menuList.map((menu,index) => (
                <h2 
                onClick={()=>{setActiveIndex(index);
                    selectedIndex(index)}
                }
                className={`p-3 text-lg px-5 text-gray-500 my-2 cursor-pointer hover:bg-primary hover:text-white flex items-center 
                ${activeIndex==index && 'bg-primary text-white'}
                `} key={menu.id}>
                    <menu.icon className='mr-3' /> 
                    {menu.name}
                </h2>
            ))}
        </div>
    </div>
  )
}

export default SideNav
